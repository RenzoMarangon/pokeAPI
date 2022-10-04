import axios from 'axios';

const getPokemons = async() => {
    //Traigo un array de objetos
    // const url = 'http://localhost:8080/api/pokemon/'
    // const urlPARABUSCAR = `https://poke-apix.herokuapp.com/api/search/${encodeURI(variable)}`;
    const url = 'https://poke-apix.herokuapp.com/api/pokemon/';
    const resp = await fetch( url );
    const { pokemons } = await resp.json()
    
    //Obtengo la parte que me importa del objeto
    const poke = pokemons.map( e => {
        const pokemon = {
          name:e.name,
          id:e.id,
          numberID: e.numberID,
          img:e.img ,
          stats:e.stats,
          evolutionLevel:e.evolutionLevel,
          type:e.type,
          generation:e.generation,
          evolution:e.evolution
        }

        return pokemon;
    })

    return poke;
}

const login = (  ) => {
    // const url = 'http://localhost:8080/auth/login';
    const url = 'https://poke-apix.herokuapp.com/auth/login';

    axios.post(url,{
        mail:'user1@gmail.com',
        password:'soyunacontraseña123!'
    })
    .then((  { data }  )=>{
        const { token, userExist } = data
        const {id, google, state,role, ...user} = userExist;
        sessionStorage.setItem( 'poke_token', JSON.stringify(token) );
        sessionStorage.setItem( 'user', JSON.stringify(user) );
        console.log(user)
    })
    .catch((err)=>{
        console.log(err)
        return
    })

}

const postPokemon = ( ) =>{
    const poke_token = JSON.parse( sessionStorage.getItem('poke_token') )
    // const url = 'http://localhost:8080/api/pokemon/';
    const url = 'https://poke-apix.herokuapp.com/api/pokemon/';

    const data = {
        name:'Bobosaur',
        numberID:'500',
        generation:'1',
        type:"Grass",
        stats:{
            attack:'50',
            defense:'50',
            resistance:'50',
            hp:'5000'
        },
        evolutionLevel:'27'
    }

    const config ={
        headers:{
            poke_token
        }
    }

    axios.post( 
        url, 
        data,
        config
    )
    .then((resp)=>{
        console.log(resp)
    })
    .catch(({response})=>{
        const { data } = response;
        console.log(data)
        return
    })
}

const searchPokemon = ( ) =>{
    const poke_token = JSON.parse( sessionStorage.getItem('poke_token') )
    // const url = 'http://localhost:8080/api/pokemon/';
    const url = 'https://poke-apix.herokuapp.com/api/search/pokemons/';


    const data = {
        name:'Bobosaur',
        numberID:'500',
        generation:'1',
        type:"Grass",
        stats:{
            attack:'50',
            defense:'50',
            resistance:'50',
            hp:'5000'
        },
        evolutionLevel:'27'
    }

    const config ={
        headers:{
            poke_token
        }
    }

    axios.post( 
        url, 
        data,
        config
    )
    .then((resp)=>{
        console.log(resp)
    })
    .catch(({response})=>{
        const { data } = response;
        console.log(data)
        return
    })
}

const deletePokemon = ( id ) => {
    const poke_token = JSON.parse( sessionStorage.getItem('poke_token') )
    const url = `https://poke-apix.herokuapp.com/api/pokemon/${ id }`;

    const config ={
        headers:{
            poke_token
        }
    }

    axios.delete(url, config).then(console.log)
}

const getPokemon = async (id, setPokemon ) =>  {
    const url = `https://poke-apix.herokuapp.com/api/pokemon/${ id }`;

    await axios.get( url )
        .then( ({data} ) => {
            setPokemon && setPokemon( data )
            return data
        })

} 




export {
    getPokemons,
    login,
    postPokemon,
    deletePokemon,
    getPokemon
}