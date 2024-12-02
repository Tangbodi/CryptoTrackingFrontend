import React, { useEffect, useRef } from 'react';

const Tape = () => {
    
    const containerRef = useRef(null);

    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: 'FOREXCOM:NSXUSD',
            title: 'US 100 Cash CFD'
          },
          {
            proName: 'BITSTAMP:BTCUSD',
            title: 'Bitcoin'
          },
          {
            proName: 'BITSTAMP:ETHUSD',
            title: 'Ethereum'
          },
          {
            proName: 'BITSTAMP:USDTUSD',
            title: 'Tether'
          },
          {
            proName: 'CRYPTO:BNBUSD',
            title: 'BNB'
          },
          {
            proName: 'BITSTAMP:USDCUSD',
            title: 'USDC'
          },
          {
            proName: 'CRYPTO:XRPUSD',
            title: 'XRP'
          },
          {
            proName: 'CRYPTO:DOGEUSD',
            title: 'DOGE'
          },
          {
            proName: 'CRYPTO:SOLUSD',
            title: 'SOL'
          },
          {
            proName: 'CRYPTO:ADAUSD',
            title: 'ADA'
          },
          {
            proName: 'CRYPTO:AVAXUSD',
            title: 'AVAX'
          },
          {
            proName: 'CRYPTO:SHIBUSD',
            title: 'SHIB'
          },
          {
            proName: 'CRYPTO:TRXUSD',
            title: 'TRON'
          },
          {
            proName: 'CRYPTO:XLMUSD',
            title: 'XLM'
          },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: 'compact',
        colorTheme: 'dark',
        locale: 'en'
      });
  
      if (containerRef.current) {
        containerRef.current.innerHTML = ''; // Clear any previous content
        containerRef.current.appendChild(script);
      }
  
      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = ''; // Clear the container when unmounting
        }
      };
    }, []);
  
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
  };
  export default Tape;

