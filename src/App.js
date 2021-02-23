import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import FBIcon from "./assets/images/icon-facebook.svg";
import InstaIcon from "./assets/images/icon-instagram.svg";
import PinterestIcon from "./assets/images/icon-pinterest.svg";
import moment from "moment";

const App = () => {
  const [ticker, setTicker] = useState(null);

  useEffect(() => {
    const countTo = moment().add(14, "days");
    const updateTicker = () => {
      const now = moment().valueOf();
      const future = countTo.valueOf();

      let remainingS = (future - now) / 1000;

      const days = Math.floor(remainingS / 86400);
      remainingS -= days * 86400;

      const hours = Math.floor(remainingS / 3600) % 24;
      remainingS -= hours * 3600;

      const minutes = Math.floor(remainingS / 60) % 60;
      remainingS -= minutes * 60;

      const seconds = Math.floor(remainingS % 60);

      setTicker({ days, hours, minutes, seconds });
    };
    updateTicker();
    const interval = setInterval(() => {
      updateTicker();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div id="hills" />
      <div id="stars" />
      <div id="innerContent">{ticker && <Countdown ticker={ticker} />}</div>
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
