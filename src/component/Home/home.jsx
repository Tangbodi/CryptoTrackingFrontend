import { useEffect, useState } from 'react';
import { CoinMarketCap_API } from '../../config/index.ts';
import Chart from '../Chart/chart.jsx';
import './home.css';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import Screener from '../Screener/screener';

function Home() {
  const [cryptoData, setCryptoData] = useState(null); // State to store the API response
  const [error, setError] = useState(null); // State to store any errors
  const [selectedSymbol, setSelectedSymbol] = useState('MARKETSCOM:BITCOIN'); // Default symbol for TradingView widget
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCryptoData = async () => {
      const cachedData = localStorage.getItem('cryptoData');
      try {
        const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map', {
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': CoinMarketCap_API,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        localStorage.setItem('cryptoData', JSON.stringify(data));
        setCryptoData(data.data);
        console.log(data);
      } catch (ex) {
        setError(ex);
        console.error('Error fetching data:', ex);
      }
    };

    fetchCryptoData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/login'); // Navigate to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleClick = (symbol) => {
    setSelectedSymbol(`MARKETSCOM:${symbol.toLowerCase()}`); // Update the symbol for TradingView widget
  };

  return (
    <div>
      {cryptoData ? (
        <div>
          {cryptoData.map((crypto) => (
            <div key={crypto.id} onClick={() => handleClick(crypto.name)}>
              <h2>{crypto.name} ({crypto.symbol})</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      <Screener />
      {/* <Chart symbol={selectedSymbol} /> */}
      <div className="login-container">
        <div>
          <button className="gsi-material-button" onClick={handleLogout}>
            <span className="gsi-material-button-contents">Log out</span>

          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
