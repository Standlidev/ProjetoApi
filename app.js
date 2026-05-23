
//Função para capturar o input e exibir o resultado na tela
let currentPokemonId = 1
async function pokemonSearch(){
    
    let pokemon = document.querySelector('#pokeNID').value.toLowerCase().trim()
    //valor para variavel nao comecar vazia e preencher o conteudo no site
    if (!pokemon) {
        pokemon = currentPokemonId.toString()
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    try {

        const pokeUrl = await(fetch(url))

        if (!pokeUrl.ok) {
        throw new Error(`Erro no servidor: Status ${pokeUrl.status}`)
        }

        const pokeData = await(pokeUrl.json())

        const pokemonFiltrado = {
            id: `#${pokeData.id.toString().padStart(3, '0')}`,
            nome: pokeData.name.toUpperCase(),
            imagem: pokeData.sprites.front_default,
            tipos: pokeData.types.map(slot => slot.type.name).join(' / '),
            peso: `${pokeData.weight / 10} kg`,
            altura: `${pokeData.height / 10} m`
        }

        const imgElement = document.querySelector('#pokeImg');
        const nameElement = document.querySelector('#pokemonName')
        const info00 = document.querySelector('.pokeinfo00')
        const info01 = document.querySelector('.pokeinfo01')
        const info02 = document.querySelector('.pokeinfo02')
        const info03 = document.querySelector('.pokeinfo03')

        nameElement.textContent = pokemonFiltrado.nome
        imgElement.src = pokemonFiltrado.imagem
        imgElement.alt = pokemonFiltrado.nome
        
        info00.textContent = `ID: ${pokemonFiltrado.id}`
        info01.textContent = `Tipo: ${pokemonFiltrado.tipos}`
        info02.textContent = `Peso: ${pokemonFiltrado.peso}`
        info03.textContent = `Altura: ${pokemonFiltrado.altura}`

        //limpar o campo do input para nao inteferrir nos botao proximo e anterior
        document.querySelector('#pokeNID').value = ""
    } catch (error) {
        console.error('Erro na requisição')
        alert('Pokémon não encontrado. Verifique o nome ou ID.')
    }

    currentPokemonId = pokemon
}


function pokemonProximo() {
   
    if (currentPokemonId >= 1025) {
        alert("Você chegou ao último Pokémon cadastrado!")
        return
    }
    currentPokemonId++ // Soma 1 ao ID atual
    pokemonSearch()    // Executa a busca com o novo ID
   
}


function pokemonAnterior() {
    
    if (currentPokemonId <= 1) {
        alert("Este já é o primeiro Pokémon!")
        return
    }
    currentPokemonId-- // Subtrai 1 do ID atual
    pokemonSearch()    // Executa a busca com o novo ID
    
}

//fazer a função ser chamada quando a pagina inteira carregar
window.addEventListener('DOMContentLoaded', pokemonSearch);
