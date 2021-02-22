import Selection from "./Selection";
import Slider from "./Slider";
import Actions from "./Actions";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="titles">
        <input type="text" placeholder="search..." />
        <Selection />
      </div>
      <Slider />
      <Actions />
    </div>
  );
};

export default Sidebar;
