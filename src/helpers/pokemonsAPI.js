const getPokemons = async() => {
    //Traigo un array de objetos
    const url = 'https://poke-apix.herokuapp.com/api/pokemon/';
    // const urlPARABUSCAR = `https://poke-apix.herokuapp.com/api/search/${encodeURI(variable)}`;
    const resp = await fetch( url );
    const { pokemons } = await resp.json()

    return pokemons;
}

export {
    getPokemons
}