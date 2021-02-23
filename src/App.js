import Countdown from "./components/Countdown";

const App = () => {
  return (
    <div className="App">
      <div id="hills" />
      <div id="stars" />
      <div id="innerContent">
        <Countdown />
      </div>
    </div>
  );
};

export default App;
