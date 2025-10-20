import { useState } from 'react';
import React from 'react'
import BotCollection from './BotCollection'
import BotArmy from './BotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  function handleEnlistment(bot) {
    if (!armyBots.find((b) => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  }

  function handleRelease(bot) {
  setArmyBots(armyBots.filter(b => b.id !== bot.id));
  }

  function handleDischarge() {
    fetch("http://localhost:3000/bots", {
      method: "DELETE",
    }).then(res => res.json())
      .then(() => {
      setBots(bots.filter(b => b.id === bot.id))
      })
    .catch(err => console.error("DElete failed", err))
  }


  return (
    <div>
      <BotCollection bots={bots} onEnlist={handleEnlistment} />
      <BotArmy armyBots={armyBots} onRelease={handleRelease}  onDischarge={handleDischarge} />
    </div>
  );
}

export default App
