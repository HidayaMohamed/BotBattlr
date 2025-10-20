import React, {useState} from 'react'

function BotSpecs({ bot }) {
    const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="bot-details">
      <button
        className="details-btn"
        onClick={(e) => {
          e.stopPropagation();
          setShowDetails((prev) => !prev);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
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
      )}
    </div>
  );
}

export default BotSpecs