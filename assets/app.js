// Variável global para armazenar o ID atual do Pokémon
let currentPokemonId = 1;

async function pokemonSearch(){
    let pokemon = document.querySelector('#pokeNID').value.toLowerCase().trim();
    
    // Valor para a variável não começar vazia no primeiro carregamento e trazer um resultado para o html
    if (!pokemon) {
        pokemon = currentPokemonId.toString();
    }
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    
    //capturar os elementos do html
    const imgElement = document.querySelector('#pokeImg');
    const nameElement = document.querySelector('#pokemonName');
    const info00 = document.querySelector('.pokeinfo00');
    const info01 = document.querySelector('.pokeinfo01');
    const info02 = document.querySelector('.pokeinfo02');
    const info03 = document.querySelector('.pokeinfo03');

    try {
        const pokeUrl = await fetch(url);

        
        if (!pokeUrl.ok) {
            throw new Error(pokeUrl.status);
        }

        console.log(`%c[Status 200] Requisição feita com sucesso.`, "color: #2a9d8f; font-weight: bold;");

        const pokeData = await pokeUrl.json();

        //faz com que a variavel do do input pegue o ID da api
        currentPokemonId = pokeData.id;

        //resultado da pesquisa do input
        const pokemonFiltrado = {          
            id: `#${pokeData.id.toString().padStart(3, '0')}`,
            nome: pokeData.name.toUpperCase(),
            imagem: pokeData.sprites.front_default || "https://via.placeholder.com/96",
            tipos: pokeData.types.map(slot => slot.type.name).join(' / '),
            peso: `${pokeData.weight / 10} kg`,
            altura: `${pokeData.height / 10} m`
        };

        // Alimenta o HTML com sucesso
        nameElement.textContent = pokemonFiltrado.nome;
        imgElement.src = pokemonFiltrado.imagem;
        imgElement.alt = pokemonFiltrado.nome;
        
        info00.textContent = `ID: ${pokemonFiltrado.id}`;
        info01.textContent = `Tipo: ${pokemonFiltrado.tipos}`;
        info02.textContent = `Peso: ${pokemonFiltrado.peso}`;
        info03.textContent = `Altura: ${pokemonFiltrado.altura}`;

        // Limpa o campo do input para nao conflitar com o botao
        document.querySelector('#pokeNID').value = "";

    } catch (error) {
        console.error('Erro na requisição:', error.message);
        
        //Imagem para o eerro
        imgElement.src = "https://cdn-icons-png.flaticon.com/512/57/57108.png";
        imgElement.alt = "Erro";
        
        // caso de de erro 404
        if (error.message === "404") {
            nameElement.textContent = "NÃO ENCONTRADO";
            info00.textContent = "Erro: 404";
            info01.textContent = "Dica: Verifique o nome";
            info02.textContent = "ou ID digitado.";
            info03.textContent = "Tente novamente!";
        } else {
            //caso de erro de rede
            nameElement.textContent = "ERRO DE REDE";
            info00.textContent = "Sem conexão";
            info01.textContent = "Verifique sua internet";
            info02.textContent = "ou tente mais tarde.";
            info03.textContent = "Falha no Fetch";
        }
    }
}

function pokemonProximo() {
    // se chegar no ultimo ele reinicina
    if (currentPokemonId >= 1025) {
        currentPokemonId = 1;
    } else {
        currentPokemonId++; // caso nao ele add 1 no atual
    }
    pokemonSearch(); 
}

function pokemonAnterior() {
    // se for o primeiro ele vai para o ultimo
    if (currentPokemonId <= 1) {
        currentPokemonId = 1025;
    } else {
        currentPokemonId--; // Caso caso nao ele tira 1
    }
    pokemonSearch();
}

// Chama a funcao quando a pagina inteira carregar
window.addEventListener('DOMContentLoaded', pokemonSearch);