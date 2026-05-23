
//Função para capturar o input e exibir o resultado na tela

async function pokemonSearch(){
    //constantes para armazenar o valor do input e tranformar numa url para a API
    const pokemon = document.querySelector('#pokeNID').value
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    //try e catch para utilizar o url na api armazernar as informacoes desejaveis e exibir na tela
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
    } catch (error) {
        console.error('Erro na requisição')
        alert('Pokémon não encontrado. Verifique o nome ou ID.')
    }


}

