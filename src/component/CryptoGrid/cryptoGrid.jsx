import React, { useState } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { formatCurrency, formatMarketCap, formatVolume, formatSupply } from '../../utils/formatters';
import Chart from '../Chart/chart';
import './cryptogrid.css';
const CryptoGrid = ({ cryptoData }) => {

    const [selectedSymbol, setSelectedSymbol] = useState("ETH");

    const columnDefs = [
        {
            headerName: "Name",
            field: "name",
            flex: 1,
        },
        {
            headerName: "Price (USD)",
            field: "quote.USD.price",
            flex: 1,
            valueFormatter: (params) => formatCurrency(params.value)
        },
        {
            headerName: "Change (%)",
            field: "quote.USD.percent_change_24h",
            flex: 1,
            valueFormatter: (params) => `${params.value.toFixed(2)}%`
        },
        {
            headerName: "Market Cap",
            field: "quote.USD.market_cap",
            flex: 1,
            valueFormatter: (params) => formatMarketCap(params.value)
        },
        {
            headerName: "Volume (24h)",
            field: "quote.USD.volume_24h",
            flex: 1,
            valueFormatter: (params) => formatVolume(params.value)
        },
        {
            headerName: "Supply",
            field: "max_supply",
            flex: 1,
            valueFormatter: (params) => {
                const supply = params.value || params.data.circulating_supply;
                return formatSupply(supply);
            }
        },


    ];

    const handleCellClick = (params) => {
        if (params.colDef.field === "name") {
            const symbol = params.data.symbol;
            setSelectedSymbol(symbol)
            console.log(symbol + 'cryp');
        }
    };

    return (
        <div className='home'>
        <div className='home-coinmarket'>
        <div style={{ width: "100%", height: "100%" }} className="ag-theme-alpine-dark">
            <AgGridReact
                rowData={cryptoData}
                columnDefs={columnDefs}
                domLayout='autoHeight'
                onCellClicked={handleCellClick}
            />
        </div>
        </div>
        <div className='home-chart'>
                <Chart symbol={selectedSymbol} />
            </div>
        </div>
    );
};

export default CryptoGrid;
