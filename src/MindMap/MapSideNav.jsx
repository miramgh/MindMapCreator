import React  from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import ColorsIcon from './ColorsIcon'

function MapSideNav({handleToggle , setStyles}) {
 
  
  return (
    <div className='map__nav'>
      <button onClick={handleToggle} >
          <AiOutlinePlus font-size={30} />
      </button>
    <ColorsIcon setStyles={setStyles}/> 
       
    </div>
  )
}

export default MapSideNav