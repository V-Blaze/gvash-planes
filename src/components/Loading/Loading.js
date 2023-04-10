import './Loading.css';

// Copy from the source: https://codemyui.com/loop-the-loop-bike-loader-in-css/

const Loading = () => (
  <div className="body w-screen h-screen">
    <div id="loop" className="center" />
    <div id="bike-wrapper" className="center">
      <div id="bike" className="centerBike" />
    </div>
  </div>
);

export default Loading;
