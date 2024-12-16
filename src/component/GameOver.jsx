export default function GameOver({winner, onRestart}) {
  return (
    <div id="game-over">
      <h2>Fin del juego!</h2>
      {winner && <p>{winner} ganó!</p>}
      {!winner && <p>Empate!</p>}
      <p>
        <button onClick={onRestart}>Reiniciar</button>
      </p>
    </div>
  );
}
