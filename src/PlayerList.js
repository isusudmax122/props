import React from 'react'
import players from './players'

const PlayerList =() =>{
  return (
    <div  style={{display:"flex" , flexWrap:"wrap"}}>
{playersData.map((player,index)=>(
   < Player key={index} {...player}/>
))}
    </div>
  )
}

export default PlayerList