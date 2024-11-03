import React, { useEffect, useState } from 'react';
import { CoinMarketCap_API_KEY, CoinMarketCap_Listings_Latest_API} from '../../config/api';
import CryptoGrid from '../CryptoGrid/cryptoGrid';

function CoinMarketCap() {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const cachedData = localStorage.getItem('cryptoData');

      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setCryptoData(parsedData.data);
        return; 
      }

      try {
        const response = await fetch(CoinMarketCap_Listings_Latest_API, {
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': CoinMarketCap_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        localStorage.setItem('cryptoData', JSON.stringify(data));
        setCryptoData(data.data);
      } catch (ex) {
        setError(ex);
        console.error('Error fetching data:', ex);
      }
    };

    fetchCryptoData();
  }, []);

  const handleClick = (symbol) => {
    setSelectedSymbol(`MARKETSCOM:${symbol.toLowerCase()}`);
  };

  return (
    <div>
      {error && <p>Error fetching data: {error.message}</p>}
      {cryptoData.length > 0 ? (
        <CryptoGrid cryptoData={cryptoData} onSymbolClick={handleClick} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default CoinMarketCap;



