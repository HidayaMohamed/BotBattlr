import React, { useState, useEffect } from 'react'
import BotSpecs from './BotSpecs'


function BotCollection({onEnlist}) {
  const [bots, setBots] = useState([])
  

    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then(res => res.json())
            .then(data => setBots(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])
  
  
  return (
    <div className="bot-collection">
      <h2>Bot collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt="Bot avatar" />
            <h2>{bot.name}</h2> 
            <BotSpecs bot={bot}/>
            <button
              onClick={() => {
                onEnlist(bot);
              }}
            >
              Enlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection