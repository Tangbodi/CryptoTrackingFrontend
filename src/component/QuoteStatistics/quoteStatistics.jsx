import React, { useState, useEffect } from 'react';
import './quoteStatistics.css';
import { formatCurrency, formatMarketCap, formatVolume, formatSupply } from '../../utils/utils';

const QuoteStatistics = ({ index }) => {
  const [quoteData, setQuoteData] = useState(0);

  useEffect(() => {
    const cachedData = localStorage.getItem('cryptoData');
    if (cachedData && index !== null) {
      const parsedData = JSON.parse(cachedData);
      const data = parsedData.data[index];
      setQuoteData(data);
    }
  }, [index]);

  if (!quoteData) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="quote-statistics">
      <div className="quote-item">
        <span className="quote-label"><strong>Price:</strong></span>
        <span className="quote-value">{formatCurrency(quoteData.quote.USD.price)}</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>1H Chg:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.percent_change_1h.toFixed(2)}%</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>Market Cap:</strong></span>
        <span className="quote-value">{formatMarketCap(quoteData.quote.USD.market_cap)}</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>Volume:</strong></span>
        <span className="quote-value">{formatVolume(quoteData.quote.USD.volume_24h)}</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>Supply:</strong></span>
        <span className="quote-value">{formatSupply(quoteData.max_supply || quoteData.circulating_supply)}</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>1D Chg:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.percent_change_24h.toFixed(2)}%</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>7D Chg:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.percent_change_7d.toFixed(2)}%</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>30D Chg:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.percent_change_30d.toFixed(2)}%</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>60D Chg:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.percent_change_60d.toFixed(2)}%</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>90D Chg:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.percent_change_90d.toFixed(2)}%</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>Volume Chg:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.volume_change_24h.toFixed(2)}%</span>
      </div>
      <div className="quote-item">
        <span className="quote-label"><strong>Dominance:</strong></span>
        <span className="quote-value">{quoteData.quote.USD.market_cap_dominance.toFixed(2)}%</span>
      </div>
    </div>

  );
};

export default QuoteStatistics;


