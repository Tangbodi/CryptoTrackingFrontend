import './home.css';
import Header from '../Header/header';
import CoinMarket from '../CoinMarket/coinMarket';
import TickerTap from '../TickerTape/tickerTape';
import WalletVW from '../Wallet/walletVW';
import Portfolio from '../../component/Portfolio/portfolio';
function Home() {
  return (
    <>
      <header className='crypto-header'>
        <Header />
      </header>
      <TickerTap />
      <Portfolio/>
      <CoinMarket />
    </>
  );
}

export default Home;