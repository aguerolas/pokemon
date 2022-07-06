import React from 'react'
import InputHome from './InputHome'

const HomeScreen = () => {

 
    
  
  return (
    <div className='header'>
        <div className='headerCircle'></div>
          <h1 className='pokedexx'><img src="https://media.discordapp.net/attachments/969327576386535515/993632886798426152/pokeapi_256.png" alt="" /></h1>
          <h1 className='homeMargin'></h1>
          <h2 className='homeMargin'>¡¿Ready for captch pokemons?!</h2>
        <InputHome />
  </div>
  )
}

export default HomeScreen