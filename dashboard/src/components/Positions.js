import React from "react";
import { positions } from "../data/data";
import { useState,useEffect } from "react";
import axios from "axios";
const Positions = () => {
  const[allPositions,setAllPositions]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:3002/allPositions").then((res)=>{
        setAllPositions(res.data);
      })
    })
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
           {allPositions.map((stock,index)=>{
                      const currValue=stock.price*stock.qty;
                      const avgValue=stock.avg*stock.qty;
                      const profitOrLoss=currValue-avgValue;
                      const isProfit=profitOrLoss>0.0;
                      const isProfitC=isProfit?"profit":"loss";
                      const isDayChange=stock.isLoss?"loss":"profit";
          
                      return(
                        <tr key={index}>
                          <td>{stock.product}</td>
                          <td>{stock.name}</td>
                          <td>{stock.qty}</td>
                          <td>{stock.avg.toFixed(2)}</td>
                          <td>{stock.price.toFixed(2)}</td>
                          <td className={isProfitC}>{profitOrLoss.toFixed(2)}</td>
                          <td className={isDayChange}>{stock.day}</td>
                        </tr>
                      )
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;
