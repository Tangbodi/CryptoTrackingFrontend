import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Chart = () => {
  const { symbol } = useParams();
  const container = useRef();

  useEffect(() => {
    const loadChart = (currentSymbol) => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = true;

      script.innerHTML = JSON.stringify({
        symbols: [
          [currentSymbol]
        ],
        chartOnly: false,
        width: '50%',
        locale: 'en',
        colorTheme: 'dark',
        autosize: true,
        showVolume: false,
        showMA: false,
        hideDateRanges: false,
        hideMarketStatus: false,
        hideSymbolLogo: false,
        scalePosition: 'right',
        scaleMode: 'Normal',
        fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
        fontSize: '10',
        noTimeScale: false,
        valuesTracking: '1',
        changeMode: 'price-and-percent',
        chartType: 'area',
        maLineColor: '#2962FF',
        maLineWidth: 1,
        maLength: 9,
        headerFontSize: 'medium',
        lineWidth: 2,
        lineType: 0,
        dateRanges: [
          '1d|1',
          '1m|30',
          '3m|60',
          '12m|1D',
          '60m|1W',
          'all|1M'
        ]
      });

      container.current.innerHTML = '';
      container.current.appendChild(script);
    };

    if (container.current) {
      const primarySymbol = `COINBASE:${symbol}USD|1D`;
      loadChart(primarySymbol);

      const checkLoadTimeout = setTimeout(() => {
        const chartLoaded = container.current.querySelector('.tradingview-widget-container');
        if (!chartLoaded) {
          const fallbackSymbol = `CRYPTOCAP:${symbol}|1D`;
          loadChart(fallbackSymbol);
        }
      }, 500);

      return () => clearTimeout(checkLoadTimeout);
    }
  }, [symbol]);

  return(
    <div className="tradingview-widget-container" ref={container}>
    <div className="tradingview-widget-container__widget"></div>
    <div className="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        <span className="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
  )
};

export default Chart;



