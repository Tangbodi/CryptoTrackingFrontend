import { formatCurrency, dayGainCalculation, totalGainCalculation } from '../../utils/utils';
import './portfolio.css'
const Portfolio = () => {
    const data = [
        {
            userId: "123456",
            userName: "Bodi",
            balance: 82369.00,
            asset: 123456.79,
            // compared with last market close
            preDayClosePrice: 123.23,
            curDayClosePrice:123.66,
            sellingPrice: 62380.20,
            purchasePrice: 53469.21,
        }
    ];

    const dayGain = dayGainCalculation(data[0].curDayClosePrice, data[0].preDayClosePrice)
    const dayGainPercentage = (dayGain/data[0].preDayClosePrice)*100
    const totalGain = totalGainCalculation(data[0].sellingPrice, data[0].purchasePrice)
    const totalGainPercentage = (totalGain/data[0].purchasePrice)*100
    return (
        <div className='portfolio'>
            <div className='portfolio-balance'>
                {formatCurrency(data[0].balance)}
            </div>
            <div className='portfolio-gain'>
                Day Gain: {formatCurrency(dayGain)} ({dayGainPercentage.toFixed(2)}%) <br />
                Total Gain: {formatCurrency(totalGain)} ({totalGainPercentage.toFixed(2)}%)
            </div>
        </div>
    );
};

export default Portfolio;
