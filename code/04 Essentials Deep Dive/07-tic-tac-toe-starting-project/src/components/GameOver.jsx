export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>게임종료!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>무승부입니다.</p>}
      <p>
        <button onClick={onRestart}>rematch!</button>
      </p>
    </div>
  );
}
