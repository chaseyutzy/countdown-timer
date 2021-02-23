import Countdown from "./components/Countdown";
import FBIcon from "./assets/images/icon-facebook.svg";
import InstaIcon from "./assets/images/icon-instagram.svg";
import PinterestIcon from "./assets/images/icon-pinterest.svg";

const App = () => {
  return (
    <div className="App">
      <div id="hills" />
      <div id="stars" />
      <div id="innerContent">
        <Countdown />
      </div>
      <div id="socialWrap">
        <div id="socialWrapInner">
          <img
            src={FBIcon}
            onClick={() => console.log("FB")}
            className="socialIcon"
            alt="Facebook site"
          />
          <img
            src={PinterestIcon}
            onClick={() => console.log("Pinterest")}
            className="socialIcon"
            alt="Pinterest site"
          />
          <img
            src={InstaIcon}
            onClick={() => console.log("Instagram")}
            className="socialIcon"
            alt="Instagram site"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
