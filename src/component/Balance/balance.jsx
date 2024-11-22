import React, { useState, useEffect } from 'react';
import { formatCurrency, dayGainCalculation, totalGainCalculation } from '../../utils/utils';
import { userBalanceAPI } from '../../request/api';
import './balance.css'
const Balance = () => {
    // const data = [
    //     {
    //         userId: "123456",
    //         userName: "Bodi",
    //         balance: 82369.00,
    //         asset: 123456.79,
    //         // compared with last market close
    //         preDayClosePrice: 123.23,
    //         curDayClosePrice:123.66,
    //         sellingPrice: 62380.20,
    //         purchasePrice: 53469.21,
    //     }
    // ];
    const [data, setData] = useState([]);
    const userId = sessionStorage.getItem('user-id');
    const fetchBalanceInfo =async() =>{
        try{
            const res = await userBalanceAPI({userId: userId})
            console.log("API Response:", res);
            
            if (res.data.code === 200) {
                console.log("Balance Data:", res.data.data);
                setData(res.data.data); // Set the data to state
                console.log(data)
            } else {
                console.error(`Error: ${res.message}`);
            }
        }catch (error) {
            console.error('Failed to fetch balance info:', error);
        }
    }
    useEffect(() => {
        fetchBalanceInfo();
    }, []);

    // const dayGain = dayGainCalculation(data[0].curDayClosePrice, data[0].preDayClosePrice)
    // const dayGainPercentage = (dayGain/data[0].preDayClosePrice)*100
    // const totalGain = totalGainCalculation(data[0].sellingPrice, data[0].purchasePrice)
    // const totalGainPercentage = (totalGain/data[0].purchasePrice)*100
    return (
        <div className='balance'>
            <div className='balance-text'>
            <h1>Balance</h1>
                {`$${data.balance}`}
            </div>
            {/* <div className='portfolio-gain'>
                Day Gain: {formatCurrency(dayGain)} ({dayGainPercentage.toFixed(2)}%) <br />
                Total Gain: {formatCurrency(totalGain)} ({totalGainPercentage.toFixed(2)}%)
            </div> */}
        </div>
    );
};

export default Balance;
