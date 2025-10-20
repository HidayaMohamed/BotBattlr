import React from 'react'
import BotSpecs from './BotSpecs';

function BotCard({bot, onClick, onDischarge }) {
  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <BotCard />
      <button onClick={() => onClick(bot)}>Release</button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDischarge(bot);
        }}
        style={{ backgroundColor: "red" }}
      >
        x Discharge
      </button>
    </div>
  );
}

export default BotCard