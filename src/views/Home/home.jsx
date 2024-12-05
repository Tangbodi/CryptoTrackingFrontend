import './home.css';
import Header from '../Header/header';
import CoinMarket from '../CoinMarket/coinMarket';
import TickerTap from '../TickerTape/tickerTape';
import WalletVW from '../Wallet/walletVW';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Home() {
    const [portfolio, setPortfolio] = useState([]);
    const navigate = useNavigate();
    const [walletAddress, setWalletAddress] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCoinName, setSelectedCoinName] = useState('');
    const [selectedCoinPrice, setSelectedCoinPrice] = useState('');

    const handleLogout = async () => {
        try {
            await signOut(auth);
            sessionStorage.clear();
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                setWalletAddress(accounts[0]);
                console.log('Connected Wallet:', accounts[0]);
            } catch (error) {
                console.error('Error connecting wallet:', error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    };

    const logoutWallet = () => {
        setWalletAddress(null);
        console.log('Wallet disconnected.');
    };

    const handleSelectCoin = (name, price) => {
        setSelectedCoinName(name);
        setSelectedCoinPrice(price);
        setShowPopup(true);
    };

    const handleBuyCoin = (e) => {
        e.preventDefault();
        alert(`You bought ${selectedCoinName} for $${selectedCoinPrice}!`);
        setShowPopup(false);
    };

    return (
        <>
            <header className="crypto-header">
                <a href="/" className="navbar-brand">Crypto Tracking</a>
                <div className="crypto-header-right">
                    {walletAddress ? (
                        <button className="wallet-button" onClick={logoutWallet}>
                            Disconnect Wallet
                        </button>
                    ) : (
                        <button className="wallet-button" onClick={connectWallet}>
                            Connect Wallet
                        </button>
                    )}
                    <button className="logout-button" onClick={handleLogout}>
                        Sign Out
                    </button>
                </div>
            </header>

            <div className="home-content">
                <TickerTap />
                <CoinMarket onSelectCoin={handleSelectCoin} />
                <WalletVW />
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Buy Coin</h2>
                        <form onSubmit={handleBuyCoin}>
                            <label>
                                Coin Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedCoinName}
                                    readOnly
                                    required
                                />
                            </label>
                            <label>
                                Price (USD):
                                <input
                                    type="number"
                                    name="price"
                                    value={selectedCoinPrice}
                                    readOnly
                                    required
                                />
                            </label>
                            <button type="submit">Buy</button>
                            <button type="button" onClick={() => setShowPopup(false)}>Close</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;




