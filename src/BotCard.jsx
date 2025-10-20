import React from 'react'

function BotCard({bot, onClick, onDischarge }) {
  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>
        Health - {bot.health}
        <br></br>
        Damage - {bot.damage} <br></br>
        Armor - {bot.armor} <br></br>
        Class - {bot.bot_class} <br></br>
        CatchPharse - {bot.catchphrase} <br></br>
        created - {bot.created_at} <br></br>
        Updated at - {bot.updated_at}
      </p>
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