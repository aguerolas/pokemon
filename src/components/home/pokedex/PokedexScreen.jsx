import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../../../Pagination'
import PokeCard from './PokeCard'
import PokeType from './PokeType'




const PokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)

  const [pokemons, setPokemons] = useState()
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(12)

  useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
    axios.get(URL_POKEMONS)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemons)
  const max = pokemons?.length / perPage
  
  const [filterPokemon, setfilterPokemon] = useState()
  console.log(filterPokemon)
  
 
  return (

    <div className='header'>
      <div className='headerCircle'>
      </div>
      <h1 className='pokedexx'><img src="https://media.discordapp.net/attachments/969327576386535515/993632886798426152/pokeapi_256.png" alt="" /></h1>
      <h2 className='margiTop margiLeft'>Hello Trainer!{nameUser} Wellcome! </h2>
      <h3 className='margiTop'><PokeType pokemons={pokemons} setfilterPokemon={setfilterPokemon}/></h3>
        
        
        <div className='superiorPages '>

      </div>
      <div className='flex'>
          <div className='pages'>
            <Pagination page={page} setPage={setPage} max={max} />
          </div>
        {
          filterPokemon ?
          filterPokemon
          ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
          ).map( pokemon => (
            <PokeCard
              key={ pokemon.url }
              url={ pokemon.url }
              />
          ))
        :
            pokemons
            ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
            ).map( pokemon => (
              <PokeCard
                key={ pokemon.url }
                url={ pokemon.url }
                />
            ))
        }
      </div>
      </div>
      
  )
}

export default PokedexScreen