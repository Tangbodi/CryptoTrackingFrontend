import './home.css';
import Header from '../Header/header';
import CoinMarket from '../CoinMarket/coinMarket';
import TickerTap from '../TickerTape/tickerTape';
function Home() {
  return (
    <>
    <Header/>
    <TickerTap/>
    <CoinMarket/>
    </>
  );
}

export default Home;