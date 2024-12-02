import './home.css';
import Header from '../Header/header';
import CoinMarket from '../CoinMarket/coinMarket';
import TickerTap from '../TickerTape/tickerTape';
import WalletVW from '../Wallet/walletVW';
function Home() {
  return (
    <>
      <header className='crypto-header'>
        <Header />
      </header>
      <TickerTap />
      <CoinMarket />
      <WalletVW/>
    </>
  );
}

export default Home;