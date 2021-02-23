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
          <a href="https://facebook.com" target="_blank" className="socialIcon">
            <img src={FBIcon} alt="Facebook site" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            className="socialIcon"
          >
            <img src={PinterestIcon} alt="Pinterest site" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="socialIcon"
          >
            <img src={InstaIcon} alt="Instagram site" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
