import React from 'react'
import BotCollection from './BotCollection'

function App() {

  const [armyBots, setArmyBots] = useState([]);

  function handleEnlistment(bot) {
    if (!armyBots.find(b => b.id === bot.id)) {
       setArmyBots([ ...armyBots, bot])
     }  // const [bots, setBots] = useState([]);
   }

  return (
    <div>
      <BotCollection onEnlist={handleEnlistment } />
    </div>
  )
}

export default App
