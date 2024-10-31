import { useEffect, useRef } from 'react';
import './screener.css';

const Screener = () => {
  const effectRan = useRef(false); // Ref to track if the effect has run

  useEffect(() => {
    if (!effectRan.current) {
      // This block will only run on the first mount
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "550",
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "dark",
        "locale": "en",
        "fullscreen": true
      });
      document.querySelector('.tradingview-widget-container__widget').appendChild(script);
      
      // Set the ref to true so it won't run again
      effectRan.current = true;
    }
  }, []);

  return (
    <div className="tradingview-widget-container__widget"></div>
  );
};

export default Screener;

