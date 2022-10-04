import React from "react";
import { getPokemon, getPokemons } from "../../helpers/pokemonsAPI";
import ContainerPokemons from '../../components/containerPokemon/ContainerPokemons'
import { shallow } from 'enzyme';


describe('Pruebas de pokemonCard', ()=>{
    
    test('El pokemon con el ID debe existir en la DB', (done)=>{
    
        const id = 1;
        //Obtengo la lista de pokemons
        getPokemons()
            .then( pokemons => {
                //Busco el pokemon en la lista
                const pokemonFilter = pokemons.find( poke => poke.numberID === id );
        
                //Busco el pokemon que contenga el id
                getPokemon( id )
                    .then( pokemon =>{
                        //Espero que el pokemon filtrado sea igual al pokemon que se busca por ID
                        expect( pokemon ).toEqual( pokemonFilter )
                        done();
                    })
            })

        // expect(unu).toBe(uwu);
        // expect(typeof unu).toBe('string');
    })

    test('El container debe mostrar todos los pokemon', (done)=>{
        const wrapper = shallow( <ContainerPokemons /> )

        expect( wrapper ).toMatchSnapshot();
        done()
    })

})