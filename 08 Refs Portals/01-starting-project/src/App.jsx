import Player from "./components/Player.jsx";
import Timer from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="Easy" targetTime={1}></Timer>
        <Timer title="Not Easy" targetTime={5}></Timer>
        <Timer title="Hard" targetTime={7}></Timer>
        <Timer title="Pros Only" targetTime={10}></Timer>
      </div>
    </>
  );
}

export default App;
