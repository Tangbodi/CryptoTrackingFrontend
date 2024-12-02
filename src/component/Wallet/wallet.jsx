import React, { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import './wallet.css'
import { getWalletInfoAPI } from '../../request/api';
const Wallet = () => {
    const [data, setData] = useState([]);
    const userId = sessionStorage.getItem('user-id');
  
    const fetchWalletInfo = async () => {
        try {
            // Fetch wallet info from the API
            const res = await getWalletInfoAPI({ userId: userId });
            console.log("API Response:", res); // Log the entire API response

            if (res.data.code === 200) {
                console.log("Setting Data:", res.data.data);
                setData(res.data.data); // Set the data to state
                console.log(data)
            } else {
                console.error(`Error: ${res.message}`);
            }
        } catch (error) {
            console.error('Failed to fetch wallet info:', error);
        }
    };

    // UseEffect to run once after the component mounts
    useEffect(() => {
        fetchWalletInfo();
    }, []); // Run this effect once, when the component mounts

    // Log data whenever it changes
    useEffect(() => {
        console.log("Updated Data:", data); // This will log the updated data when `data` changes
    }, [data]);

    const columnDefs = [
        {
            headerName: "Symbol",
            field: "symbol",
            flex: 1,
        },
        {
            headerName: "QTY",
            field: "quantity",
            flex: 1,
        },
        {
            headerName: "Avg Cost / Unit",
            field: "avgCostPerUnit",  // Ensure this matches your data structure
            flex: 1,
        },
    ];

    return (
        <div className='wallet'>
            <div className='wallet-text'>
                <h1>My Holdings</h1>
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