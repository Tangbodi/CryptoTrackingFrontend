import React from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { formatCurrency, formatMarketCap, formatVolume, formatSupply } from '../../utils/formatters';
import { useNavigate  } from 'react-router-dom';


const CustomButtonComponent = (props) => {

    return <button onClick={() => window.alert("clicked")}>Trade</button>;
};

const CryptoGrid = ({ cryptoData, onSymbolClick }) => {
    const navigate = useNavigate();
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
        { field: "Trade", cellRenderer: CustomButtonComponent, flex: 1 },

    ];

    const handleCellClick = (params) => {
        if (params.colDef.field === "name") {
            const symbol = params.data.symbol;
            console.log(symbol);
            navigate(`/diagram/${symbol}`);
        }
    };

    return (
        <div style={{ width: "100%", height: "100%" }} className="ag-theme-alpine-dark">
            <AgGridReact
                rowData={cryptoData}
                columnDefs={columnDefs}
                domLayout='autoHeight'
                onCellClicked={handleCellClick}
            />
        </div>
    );
};

export default CryptoGrid;
