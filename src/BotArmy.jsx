import React from 'react'
import BotCard from './BotCard'

function BotArmy({armyBots, onRelease, onDischarge}) {
  return (
      <div className='bot-army'>
          <h2>Your Bot Army</h2>
          <div>
              {armyBots.map((bot) => (
                  <BotCard
                      key={bot.id}
                      bot={bot}
                      onClick={onRelease}
                      onDischarge={onDischarge}
                  />
              ))}
          </div>
    </div>
  )
}

export default BotArmy