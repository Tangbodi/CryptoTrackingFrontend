// import React, { useState } from 'react';
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { formatCurrency, formatMarketCap, formatVolume, formatSupply } from '../../utils/utils';
// import Chart from '../Chart/chart';
// import Wallet from '../Wallet/wallet';
// import Popup from '../Popup/popup';
// import QuoteStatistics from '../QuoteStatistics/quoteStatistics';
// const CryptoGrid = ({ cryptoData }) => {
//     const paginationPageSizeSelector = [20];
//     const [selectedSymbol, setSelectedSymbol] = useState("BTC");
//     const [showPopup, setShowPopup] = useState(false);
//     const [index, setIndex] = useState(null);
//     const handleTradeClick = (symbol) => {
//         setSelectedSymbol(symbol);
//         setShowPopup(true);
//     };
//
//     const closePopup = () => {
//         setShowPopup(false);
//     };
//
//     const CustomButtonComponent = (props) => {
//         const { symbol } = props.data;
//         return (
//             <button onClick={() => handleTradeClick(symbol)} style={{ cursor: 'pointer' }}>
//                 Trade
//             </button>
//         );
//     };
//
//     const handleCellClick = (params) => {
//         if (params.colDef.field === "name" || params.colDef.field === "symbol") {
//             const { symbol } = params.data;
//             setSelectedSymbol(symbol);
//             setIndex(params.rowIndex)
//         }
//     };
//     console.log(selectedSymbol);
//     console.log(index);
//
//     const columnDefs = [
//         {
//             headerName: "Symbol",
//             field: "symbol",
//             flex: 1,
//             cellStyle: { cursor: 'pointer' },
//         },
//         {
//             headerName: "Name",
//             field: "name",
//             flex: 1,
//             cellStyle: { cursor: 'pointer' },
//         },
//         {
//             headerName: "Price (USD)",
//             field: "quote.USD.price",
//             flex: 1,
//             valueFormatter: (params) => formatCurrency(params.value),
//         },
//         {
//             headerName: "Change (%)",
//             field: "quote.USD.percent_change_24h",
//             flex: 1,
//             valueFormatter: (params) => `${params.value.toFixed(2)}%`,
//         },
//         {
//             headerName: "Market Cap",
//             field: "quote.USD.market_cap",
//             flex: 1,
//             valueFormatter: (params) => formatMarketCap(params.value),
//         },
//         {
//             headerName: "Volume (24h)",
//             field: "quote.USD.volume_24h",
//             flex: 1,
//             valueFormatter: (params) => formatVolume(params.value),
//         },
//         {
//             headerName: "Supply",
//             field: "max_supply",
//             flex: 1,
//             valueFormatter: (params) => {
//                 const supply = params.value || params.data.circulating_supply;
//                 return formatSupply(supply);
//             },
//         },
//         {
//             field: "trade",
//             cellRenderer: CustomButtonComponent,
//             flex: 1,
//         },
//     ];
//
//     return (
//         <div className='home'>
//             <div className='coinmarket'>
//                 <div style={{ width: "100%", height: "100%" }} className="ag-theme-alpine-dark">
//                     <AgGridReact
//                         pagination={true}
//                         paginationPageSize={20}
//                         paginationPageSizeSelector={paginationPageSizeSelector}
//                         rowData={cryptoData}
//                         columnDefs={columnDefs}
//                         domLayout='autoHeight'
//                         onCellClicked={handleCellClick}
//                     />
//                 </div>
//             </div>
//             <div className='chart'>
//                 <Chart symbol={selectedSymbol} />
//                 <QuoteStatistics index={index} />
//             </div>
//             {showPopup && <Popup symbol={selectedSymbol} onClose={closePopup} />}
//
//         </div>
//     );
// };
//
// export default CryptoGrid;




//
// import React, { useState } from 'react';
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { formatCurrency, formatMarketCap, formatVolume, formatSupply } from '../../utils/utils';
// import Chart from '../Chart/chart';
// import QuoteStatistics from '../QuoteStatistics/quoteStatistics';
// import PlaceOrder from '../PlaceOrder/placeOrder'; // Ensure this is imported
//
// const CryptoGrid = ({ cryptoData }) => {
//     const paginationPageSizeSelector = [20];
//     const [selectedSymbol, setSelectedSymbol] = useState("BTC");
//     const [selectedPrice, setSelectedPrice] = useState(null); // Add state for price
//     const [showPopup, setShowPopup] = useState(false);
//     const [index, setIndex] = useState(null);
//
//     const handleTradeClick = (symbol, price) => {
//         setSelectedSymbol(symbol);
//         setSelectedPrice(price);
//         setShowPopup(true);
//     };
//
//     const CustomButtonComponent = (props) => {
//         const { symbol, quote } = props.data;
//         const price = quote.USD.price;
//         return (
//             <button onClick={() => handleTradeClick(symbol, price)} style={{ cursor: 'pointer' }}>
//                 Trade
//             </button>
//         );
//     };
//
//
//     const closePopup = () => {
//         setShowPopup(false);
//     };
//
//
//     const handleCellClick = (params) => {
//         if (params.colDef.field === "name" || params.colDef.field === "symbol") {
//             const { symbol, quote } = params.data;
//             const price = quote?.USD?.price || 0;
//             setSelectedSymbol(symbol);
//             setSelectedPrice(price);
//             setIndex(params.rowIndex);
//         }
//     };
//
//     const columnDefs = [
//         {
//             headerName: "Symbol",
//             field: "symbol",
//             flex: 1,
//             cellStyle: { cursor: 'pointer' },
//         },
//         {
//             headerName: "Name",
//             field: "name",
//             flex: 1,
//             cellStyle: { cursor: 'pointer' },
//         },
//         {
//             headerName: "Price (USD)",
//             field: "quote.USD.price",
//             flex: 1,
//             valueFormatter: (params) => formatCurrency(params.value),
//         },
//         {
//             headerName: "Change (%)",
//             field: "quote.USD.percent_change_24h",
//             flex: 1,
//             valueFormatter: (params) => `${params.value.toFixed(2)}%`,
//         },
//         {
//             headerName: "Market Cap",
//             field: "quote.USD.market_cap",
//             flex: 1,
//             valueFormatter: (params) => formatMarketCap(params.value),
//         },
//         {
//             headerName: "Volume (24h)",
//             field: "quote.USD.volume_24h",
//             flex: 1,
//             valueFormatter: (params) => formatVolume(params.value),
//         },
//         {
//             headerName: "Supply",
//             field: "max_supply",
//             flex: 1,
//             valueFormatter: (params) => {
//                 const supply = params.value || params.data.circulating_supply;
//                 return formatSupply(supply);
//             },
//         },
//         {
//             field: "trade",
//             cellRenderer: CustomButtonComponent,
//             flex: 1,
//         },
//     ];
//
//     return (
//         <div className='home'>
//             <div className='coinmarket'>
//                 <div style={{ width: "100%", height: "100%" }} className="ag-theme-alpine-dark">
//                     <AgGridReact
//                         pagination={true}
//                         paginationPageSize={20}
//                         paginationPageSizeSelector={paginationPageSizeSelector}
//                         rowData={cryptoData}
//                         columnDefs={columnDefs}
//                         domLayout='autoHeight'
//                         onCellClicked={handleCellClick}
//                     />
//                 </div>
//             </div>
//             <div className='chart'>
//                 <Chart symbol={selectedSymbol} />
//                 <QuoteStatistics index={index} />
//             </div>
//             {showPopup && (
//                 <PlaceOrder
//                     symbol={selectedSymbol}
//                     price={selectedPrice} // Pass the price dynamically
//                     onClose={closePopup}
//                 />
//             )}
//         </div>
//     );
// };
//
// export default CryptoGrid;





import React, { useState } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { formatCurrency, formatMarketCap, formatVolume, formatSupply } from '../../utils/utils';
import Chart from '../Chart/chart';
import QuoteStatistics from '../QuoteStatistics/quoteStatistics';
import PlaceOrder from '../PlaceOrder/placeOrder';

const CryptoGrid = ({ cryptoData }) => {
    const paginationPageSizeSelector = [20];
    const [selectedSymbol, setSelectedSymbol] = useState("BTC");
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [index, setIndex] = useState(null);

    const handleTradeClick = (symbol, price) => {
        setSelectedSymbol(symbol);
        setSelectedPrice(price);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const CustomButtonComponent = (props) => {
        const { symbol, quote } = props.data;
        const price = quote.USD.price;
        return (
            <button onClick={() => handleTradeClick(symbol, price)} style={{ cursor: 'pointer' }}>
                Trade
            </button>
        );
    };

    const handleCellClick = (params) => {
        if (params.colDef.field === "name" || params.colDef.field === "symbol") {
            const { symbol, quote } = params.data;
            const price = quote?.USD?.price || 0;
            setSelectedSymbol(symbol);
            setSelectedPrice(price);
            setIndex(params.rowIndex);
        }
    };

    const columnDefs = [
        {
            headerName: "Symbol",
            field: "symbol",
            flex: 1,
            cellStyle: { cursor: 'pointer' },
        },
        {
            headerName: "Name",
            field: "name",
            flex: 1,
            cellStyle: { cursor: 'pointer' },
        },
        {
            headerName: "Price (USD)",
            field: "quote.USD.price",
            flex: 1,
            valueFormatter: (params) => formatCurrency(params.value),
        },
        {
            headerName: "Change (%)",
            field: "quote.USD.percent_change_24h",
            flex: 1,
            valueFormatter: (params) => `${params.value.toFixed(2)}%`,
        },
        {
            headerName: "Market Cap",
            field: "quote.USD.market_cap",
            flex: 1,
            valueFormatter: (params) => formatMarketCap(params.value),
        },
        {
            headerName: "Volume (24h)",
            field: "quote.USD.volume_24h",
            flex: 1,
            valueFormatter: (params) => formatVolume(params.value),
        },
        {
            headerName: "Supply",
            field: "max_supply",
            flex: 1,
            valueFormatter: (params) => {
                const supply = params.value || params.data.circulating_supply;
                return formatSupply(supply);
            },
        },
        {
            field: "trade",
            cellRenderer: CustomButtonComponent,
            flex: 1,
        },
    ];

    return (
        <div className='home'>
            <div className='coinmarket'>
                <div style={{ width: "100%", height: "100%" }} className="ag-theme-alpine-dark">
                    <AgGridReact
                        pagination={true}
                        paginationPageSize={20}
                        paginationPageSizeSelector={paginationPageSizeSelector}
                        rowData={cryptoData}
                        columnDefs={columnDefs}
                        domLayout='autoHeight'
                        onCellClicked={handleCellClick}
                    />
                </div>
            </div>
            <div className='chart'>
                <Chart symbol={selectedSymbol} />
                <QuoteStatistics index={index} />
            </div>
            {showPopup && (
                <PlaceOrder
                    symbol={selectedSymbol}
                    price={selectedPrice} // Pass the price dynamically
                    onClose={closePopup}
                />
            )}
        </div>
    );
};

export default CryptoGrid;
