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

import './home.css';
import Header from '../Header/header';
import CoinMarket from '../CoinMarket/coinMarket';
import TickerTap from '../TickerTape/tickerTape';
import WalletVW from '../Wallet/walletVW';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out from Firebase
            sessionStorage.clear(); // Clear session storage
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <>
            <header className="crypto-header">
                <Header />
            </header>
            <div className="home-content">
                <TickerTap />
                <CoinMarket />
                <WalletVW />
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
