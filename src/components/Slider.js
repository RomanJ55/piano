const Slider = () => {
  return (
    <div className="speed">
      <label htmlFor="speed">Speed:</label>
      <input
        type="range"
        min="0"
        max="2"
        defaultValue="2"
        step="1"
        name="speed"
        id="speed"
      />
      <h5>Slow-Normal</h5>
    </div>
  );
};

export default Slider;
