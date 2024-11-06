import React, { useEffect, useState } from 'react';
import { CoinMarketCap_API_KEY, CoinMarketCap_Listings_Latest_API } from '../../config/api';
import CryptoGrid from '../CryptoGrid/cryptoGrid';
import Chart from '../Chart/chart';
import './coinmarket.css';
import Wallet from '../Wallet/wallet';
import PlaceOrder from '../PlaceOrder/placeOrder';
const data = [
  {
    symbol: "BTC",
    quantity: 0.5,
    date: new Date("2024-11-06T14:30:00Z")
  },
  {
    symbol: "ETH",
    quantity: 2.0,
    date: new Date("2024-11-05T10:15:00Z")
  },
  {
    symbol: "XRP",
    quantity: 1000,
    date: new Date("2024-11-01T08:45:00Z")
  },
  {
    symbol: "ADA",
    quantity: 500,
    date: new Date("2024-10-31T17:20:00Z")
  },
  {
    symbol: "BTC",
    quantity: 0.5,
    date: new Date("2024-11-06T14:30:00Z")
},
{
    symbol: "ETH",
    quantity: 2.0,
    date: new Date("2024-11-05T10:15:00Z")
},
{
    symbol: "XRP",
    quantity: 1000,
    date: new Date("2024-11-01T08:45:00Z")
},
{
    symbol: "ADA",
    quantity: 500,
    date: new Date("2024-10-31T17:20:00Z")
},    {
  symbol: "BTC",
  quantity: 0.5,
  date: new Date("2024-11-06T14:30:00Z")
},
{
  symbol: "ETH",
  quantity: 2.0,
  date: new Date("2024-11-05T10:15:00Z")
},
{
  symbol: "XRP",
  quantity: 1000,
  date: new Date("2024-11-01T08:45:00Z")
},
{
  symbol: "ADA",
  quantity: 500,
  date: new Date("2024-10-31T17:20:00Z")
}
];

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
    setSelectedSymbol(symbol);  // Update the selectedSymbol state
    console.log(symbol + ' coin');  // Logging for debugging
  };

  return (
    <div className='home'>
      <div className='home-coinmarket'>
        {error && <p>Error fetching data: {error.message}</p>}
        {cryptoData.length > 0 ? (
          <CryptoGrid cryptoData={cryptoData} onSymbolClick={handleClick} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <div className='home-chart'>
        <Chart symbol={selectedSymbol} />
        <div className='home-wallet-checkout'>
        <div className='home-wallet'>
        <Wallet data={data} />
        </div>
        <div className='home-checkout'>
        <PlaceOrder data={data} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default CoinMarketCap;



