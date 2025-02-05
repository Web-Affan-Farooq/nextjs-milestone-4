import React from 'react'

interface Card {
    description:string;
    completed:boolean;
}

const Card = ({description, completed}:Card) => {
  return (
    <div className="w-[80vw] rounded-lg bg-[rgba(255,255,255,0.1)] p-3 backdrop-blur-3xl text-gray-400">
        <h1 className='text-2xl text-white'>{description}</h1>
        <br />
    <i className="fa-solid fa-circle-check"></i> <span className="text-white">{completed? "Task completed" : "remaining"}</span>
    </div> 
     )
}

export default Card