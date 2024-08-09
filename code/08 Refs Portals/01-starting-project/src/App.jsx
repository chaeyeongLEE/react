import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenge title="Easy" targetTIme={1} />
          <TimerChallenge title="Not Easy" targetTIme={5} />
          <TimerChallenge title="Getting tough" targetTIme={10} />
          <TimerChallenge title="Pros Only" targetTIme={15} />
      </div>
    </>
  );
}

export default App;
