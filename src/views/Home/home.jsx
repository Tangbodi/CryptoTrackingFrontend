// import './home.css';
// import Header from '../Header/header';
// import CoinMarket from '../CoinMarket/coinMarket';
// import TickerTap from '../TickerTape/tickerTape';
// import WalletVW from '../Wallet/walletVW';
// import { auth } from '../../config/firebase';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
//
// function Home() {
//     const navigate = useNavigate();
//     const [walletAddress, setWalletAddress] = useState(null); // Fix: Properly define walletAddress and setWalletAddress
//     const [showPopup, setShowPopup] = useState(false); // Popup state
//     // Handle Firebase Logout
//     const handleLogout = async () => {
//         try {
//             await signOut(auth); // Sign out from Firebase
//             sessionStorage.clear(); // Clear session storage
//             navigate('/login'); // Redirect to login page
//         } catch (error) {
//             console.error('Error signing out:', error);
//         }
//     };
//
//     // Handle Wallet Connection
//     const connectWallet = async () => {
//         if (window.ethereum) {
//             try {
//                 const accounts = await window.ethereum.request({
//                     method: 'eth_requestAccounts',
//                 });
//                 setWalletAddress(accounts[0]); // Save connected wallet address
//                 console.log('Connected Wallet:', accounts[0]);
//             } catch (error) {
//                 console.error('Error connecting wallet:', error);
//             }
//         } else {
//             alert('MetaMask is not installed. Please install it to use this feature.');
//         }
//     };
//
//     // Handle Wallet Logout
//     const logoutWallet = () => {
//         setWalletAddress(null); // Clear wallet address
//         console.log('Wallet disconnected.');
//     };
//
//     // // Handle Buy Coin Submission
//     // const handleBuyCoin = (e) => {
//     //     e.preventDefault();
//     //     const coinName = e.target.elements.name.value;
//     //     const coinPrice = e.target.elements.price.value;
//     //     alert(`You have bought ${coinName} for $${coinPrice}`);
//     //     setShowPopup(false);
//     // };
//
//
//     // Handle Buy Coin Submission
//     const handleBuyCoin = (e) => {
//         e.preventDefault();
//         alert(`You have bought ${selectedCoinName} for $${selectedCoinPrice}`);
//         setShowPopup(false);
//     };
//
//     // Handle Selecting a Coin
//     const handleSelectCoin = (name, price) => {
//         setSelectedCoinName(name);
//         setSelectedCoinPrice(price);
//         setShowPopup(true);
//     };
//     return (
//         <>
//             <header className="crypto-header">
//                 <a href="/" className="navbar-brand">
//                     Crypto Tracking
//                 </a>
//                 <div className="crypto-header-right">
//                     {/* Wallet Menu */}
//                     {walletAddress ? (
//                         <button className="wallet-button" onClick={logoutWallet}>
//                             Disconnect Wallet
//                         </button>
//                     ) : (
//                         <button className="wallet-button" onClick={connectWallet}>
//                             Connect Wallet
//                         </button>
//                     )}
//                     {/* Buy Coin Button */}
//                     <button className="buy-button" onClick={() => setShowPopup(true)}>
//                         Buy Coin
//                     </button>
//                     {/* Google Sign Out */}
//                     <button className="logout-button" onClick={handleLogout}>
//                         Sign Out
//                     </button>
//                 </div>
//             </header>
//
//
//             <div className="home-content">
//                 <TickerTap />
//                 <CoinMarket onSelectCoin={handleSelectCoin} />
//                 <WalletVW />
//             </div>
//
//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div className="popup-content">
//                         <h2>Buy Coin</h2>
//                         <form onSubmit={handleBuyCoin}>
//                             <label>
//                                 Coin Name:
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={selectedCoinName}
//                                     readOnly
//                                     required
//                                 />
//                             </label>
//                             <label>
//                                 Price (USD):
//                                 <input
//                                     type="number"
//                                     name="price"
//                                     value={selectedCoinPrice}
//                                     readOnly
//                                     required
//                                 />
//                             </label>
//                             <button type="submit">Buy</button>
//                         </form>
//                         <button onClick={() => setShowPopup(false)}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
//
// export default Home;
//
//
//
//
//


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




