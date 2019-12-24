const Header = () => (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Player 1:</span>
    </header>
);

const Player = () => (
  <div className="player">
    <span className="player-name">
      Bruno
    </span>

    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  </div>
);

ReactDOM.render(
  <Player />,
  document.getElementById('root')
);