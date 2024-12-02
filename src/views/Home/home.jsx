// import './home.css';
// import Header from '../Header/header';
// import CoinMarket from '../CoinMarket/coinMarket';
// import TickerTap from '../TickerTape/tickerTape';
// import WalletVW from '../Wallet/walletVW';
// function Home() {
//   return (
//     <>
//       <header className='crypto-header'>
//         <Header />
//       </header>
//       <TickerTap />
//       <CoinMarket />
//       <WalletVW/>
//     </>
//   );
// }
//
// export default Home;
//
// import './home.css';
// import Header from '../Header/header';
// import CoinMarket from '../CoinMarket/coinMarket';
// import TickerTap from '../TickerTape/tickerTape';
// import WalletVW from '../Wallet/walletVW';
// import { auth } from '../../config/firebase';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
//
// function Home() {
//     const navigate = useNavigate();
//
//     const handleLogout = async () => {
//         try {
//             await signOut(auth); // Sign out from Firebase
//             sessionStorage.clear(); // Clear session storage
//             navigate('/login'); // Redirect to login page
//         } catch (error) {
//             console.error('Error signing out:', error);
//         }
//     };
//         // Handle Wallet Connection
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
//     return (
//         <>
//             <header className="crypto-header">
//                 <Header />
//                 <div className="crypto-header-right">
//                     //                     {/* Wallet Menu */}
//                     //                     {walletAddress ? (
//                         <div>
//                             <p>Connected: {walletAddress}</p>
//                             <button className="wallet-button" onClick={logoutWallet}>
//                                 Disconnect Wallet
//                             </button>
//                         </div>
//                     ) : (
//                         <button className="wallet-button" onClick={connectWallet}>
//                             Connect Wallet
//                         </button>
//                     )}
//                 </div>
//             </header>
//             <div className="home-content">
//                 <TickerTap />
//                 <CoinMarket />
//                 <WalletVW />
//             </div>
//
//             {/* Sign Out Button */}
//             <footer className="home-footer">
//                 <button className="logout-button" onClick={handleLogout}>
//                     Sign Out
//                 </button>
//             </footer>
//         </>
//     );
// }
//
// export default Home;
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
    const navigate = useNavigate();
    const [walletAddress, setWalletAddress] = useState(null); // Fix: Properly define walletAddress and setWalletAddress

    // Handle Firebase Logout
    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out from Firebase
            sessionStorage.clear(); // Clear session storage
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    // Handle Wallet Connection
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                setWalletAddress(accounts[0]); // Save connected wallet address
                console.log('Connected Wallet:', accounts[0]);
            } catch (error) {
                console.error('Error connecting wallet:', error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    };

    // Handle Wallet Logout
    const logoutWallet = () => {
        setWalletAddress(null); // Clear wallet address
        console.log('Wallet disconnected.');
    };

    return (
        <>
            <header className="crypto-header">
                <a href="/" className="navbar-brand">
                    Crypto Tracking
                </a>
                <div className="crypto-header-right">
                    {/* Wallet Menu */}
                    {walletAddress ? (
                        <button className="wallet-button" onClick={logoutWallet}>
                            Disconnect Wallet
                        </button>
                    ) : (
                        <button className="wallet-button" onClick={connectWallet}>
                            Connect Wallet
                        </button>
                    )}
                    {/* Google Sign Out */}
                    <button className="logout-button" onClick={handleLogout}>
                        Sign Out
                    </button>
                </div>
            </header>


            <div className="home-content">
                <TickerTap/>
                <CoinMarket/>
                <WalletVW/>
            </div>

            {/* Sign Out Button */}
            <footer className="home-footer">
                <button className="logout-button" onClick={handleLogout}>
                    Sign Out
                </button>
            </footer>
        </>
    );
}

export default Home;











