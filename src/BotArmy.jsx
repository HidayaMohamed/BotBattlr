import React from 'react'
import BotCard from './BotCard'

function BotArmy({armyBots, onRelease, onDischarge}) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div>
        <ul className="army-list">
          {armyBots.map((bot) => (
            <li key={bot.id} className="army-item">
              <BotCard
                key={bot.id}
                bot={bot}
                onClick={onRelease}
                onDischarge={onDischarge}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BotArmy