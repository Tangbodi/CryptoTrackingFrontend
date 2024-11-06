import React from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";



const Wallet = ({ data, onSymbolClick }) => {
    const columnDefs = [
        {
            headerName: "Name",
            field: "symbol",
            flex: 1,
        },
        {
            headerName: "Quantity",
            field: "quantity",
            flex: 1,
        },
        {
            headerName: "Date",
            field: "date",
            flex: 1,
        }
    ];
    const handleCellClick = (params) => {
          if (params.colDef.field === "symbol") {
            const symbol = params.data.symbol;
            onSymbolClick(symbol)
            console.log(symbol+'wallet');
        }
    };
    return (
        <div style={{ width: "100%", height: "100%" }} className="ag-theme-alpine-dark">
            <AgGridReact
                rowData={data}
                columnDefs={columnDefs}
                domLayout='autoHeight'
                onCellClicked={handleCellClick}
            />
        </div>

    );
};

export default Wallet;



  