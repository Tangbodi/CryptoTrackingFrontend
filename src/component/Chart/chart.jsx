import React, { useEffect, useRef, memo } from 'react';

function Chart({ symbol }) {
  const containerRef = useRef(null);

  useEffect(() => {
    console.log(`Loading widget for symbol: ${symbol}`);

    const loadWidget = () => {
      if (!containerRef.current) return;

      // Clear previous widget to avoid duplicates
      containerRef.current.innerHTML = '';

      // Create the script element dynamically
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = false;

      script.innerHTML = `
        {
          "symbols": [
            [
              "${symbol}|3M"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "medium",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;

      // Append the script to the container only after it's mounted
      setTimeout(() => {
        containerRef.current.appendChild(script);
      }, 500);  // Delay of 500ms
    };
    
    // Wait until the container is mounted and rendered
    loadWidget();
  }, [symbol]); // Depend on symbol to re-render widget when symbol changes

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(Chart);



