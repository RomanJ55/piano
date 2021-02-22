import Notes from "./Notes";
import Piano from "./Piano";

const Main = () => {
  return (
    <div className="main">
      <img src="images/metronome.svg" alt="metronome" />
      <h1>Piano app</h1>
      <div className="player">
        <Notes />
        <Piano />
      </div>
    </div>
  );
};

export default Main;
