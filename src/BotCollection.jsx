import React, { useState, useEffect } from 'react'

function BotCollection() {
    const [bots, setBots] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then(res => res.json())
            .then(data => setBots(data))
        .catch(error => console.error('Error fetching data:', error))
    }, [])
  
  
  return (
    <div>
      <h2>Bot collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
           <img src={bot.avatar_url} alt="Bot avatar"/>  -{bot.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection