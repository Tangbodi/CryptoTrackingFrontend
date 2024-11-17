import React from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {formatMarketCap} from '../../utils/utils';

const Wallet = () => {
    const data = [
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
        {
            name: "Bitcoin",
            symbol:"BTC",
            quantity: 100,
            change: 0.81991846,
            day_change:5.26172872,
            market_cap: 1677564402090.3435,
            total_change:1.23454678
        },
    ];
    const columnDefs = [
        {
            headerName: "Name",
            field: "name",
            flex: 1,
        },
        {
            headerName: "Quantity",
            field: "quantity",
            flex: 1,
        },
        {
            headerName: "Change (%)",
            field: "change",
            flex: 1,
            valueFormatter: (params) => `${params.value.toFixed(2)}%`
        },
        {
            headerName: "Day Chg (%)",
            field: "day_change",
            flex: 1,
            valueFormatter: (params) => `${params.value.toFixed(2)}%`

        },
        {
            headerName: "Market Value",
            field: "market_cap",
            flex: 1,
            valueFormatter: (params) => formatMarketCap(params.value)

        },{
            headerName: "Total Chg (%)",
            field: "total_change",
            flex: 1,
            valueFormatter: (params) => `${params.value.toFixed(2)}%`

        }
    ];

    return (
        <div>
            <div style={{ padding: "10px" }}>
                <h1>My Portfolios</h1>
            </div>
            <div style={{ width: "100%", height: "100%" }} className="ag-theme-alpine-dark">
                <AgGridReact
                    rowData={data}
                    columnDefs={columnDefs}
                    domLayout="autoHeight"
                />
            </div>
        </div>
    );

};

export default Wallet;



