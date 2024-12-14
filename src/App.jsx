import Player from "./component/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player inicialName="Player 1" symbol="X" />
          <Player inicialName="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
