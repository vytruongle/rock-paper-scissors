import "./App.css";
import "./components/MiniGame.css";
import MiniGame from "./components/MiniGame";

function App() {
  return (
    <div className="App bgGame">
      <h1 style={{ color: "#fff", fontWeight: "700", marginBottom: "50px" }}>
        GAME ROCK-PAPER-SCISSORS
      </h1>
      <MiniGame />
      <img className="w-100 " src="./image/bgGame.png" alt="" />
    </div>
  );
}

export default App;
