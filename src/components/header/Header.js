import React from 'react'
const homeIcon = './assets/pokeball.png';
const pokedexIcon = './assets/pokedex.png';
const cardIcon = './assets/trading.png';
const userIcon = './assets/user.png';


const Header = () => {
  return (
    <div className='header-container'> 
        <navbar className='header-container__navbar'>
            <ul>
                <li>
                    <img alt={ 'HomeIcon' } src = { homeIcon } />
                    <p>Inicio</p>
                    <span></span>
                </li>
                <li>
                    <img alt={ 'pokedexIcon' } src = { pokedexIcon } />
                    <p>Pokedex</p>
                    <span></span>

                </li>
                <li>                    
                    <img alt={ 'cardIcon' } src = { cardIcon } />
                    <p>Mis cartas</p>
                    <span></span>

                </li>
                <li>                    
                    <img alt={ 'userIcon' } src = { userIcon } />
                </li>
            </ul>
        </navbar>

    </div>
  )
}

export default Header