import React, { useState } from 'react'

function ColorsIcon({setStyles}) {
    const [colorsDropDown , setColorsDropDown] = useState ('HideColors')
   const  showColorPalleteHandler = ()=>{
         if (colorsDropDown =='Colors'){
             setColorsDropDown('HideColors')
         }else{
             setColorsDropDown('Colors')
         }
   }
  return (
      <>
        <button onClick={showColorPalleteHandler}>
                <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </button>

            <div className={colorsDropDown}>
                <button className='mint__btn' onClick={()=>{setStyles('mint')}}></button>
                <button className='pink__btn' onClick={()=>{setStyles('pink')}} ></button>
                <button className ='orange__btn' onClick={()=>{setStyles('orange')}}> </button>
                <button className ='babyblue__btn' onClick={()=>{setStyles('babyblue')}}></button>
                <button className="yellow__btn" onClick={()=>{setStyles('yellow')}}></button>
                <button className="" onClick={()=>{setStyles('')}}>x</button>
              
        </div>
    </>
  )
}

export default ColorsIcon