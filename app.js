

async function pokemonSearch(){
    const pokemon = document.querySelector('#pokeNID').value
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try {

        const pokeUrl = await(fetch(url))

        const pokeData = await(pokeUrl.json())

        let pokeResult = [
        
        ]
    } catch (error) {
        console.error('Erro na requisição');
    }


}

