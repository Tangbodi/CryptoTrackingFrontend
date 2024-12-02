function formatLargeNumber(value, currency = false) {
    let formattedValue;
    if (value >= 1e12) formattedValue = `${(value / 1e12).toFixed(1)}T`; 
    else if (value >= 1e9) formattedValue = `${(value / 1e9).toFixed(1)}B`; 
    else if (value >= 1e6) formattedValue = `${(value / 1e6).toFixed(1)}M`; 
    else if (value >= 1e3) formattedValue = `${(value / 1e3).toFixed(1)}K`; 
    else formattedValue = value.toString();

    return currency ? `$${formattedValue}` : formattedValue;
}

export function formatCurrency(value) {
    return `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function formatMarketCap(value) {
    return formatLargeNumber(value, true);
}

export function formatVolume(value) {
    return formatLargeNumber(value, true); 
}

export function formatSupply(value) {
    return formatLargeNumber(value); 
}

export const removeSessionStorage = () =>{
    sessionStorage.removeItem('crypto-avatarurl');
    sessionStorage.removeItem('user-id');
    sessionStorage.removeItem('user-name');
}

export function dayGainCalculation(preDayClosePrice,curDayClosePrice ){
    return curDayClosePrice - preDayClosePrice;
}

export function totalGainCalculation(sellingPrice, purchasePrice){
    return sellingPrice - purchasePrice;
}