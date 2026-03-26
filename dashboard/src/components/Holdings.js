import React from "react";
// import {holdings} from "../data/data"
import { useState,useEffect } from "react";
import axios from "axios";
import { VerticalChart } from "./VerticalChart";
const Holdings = () => {
  const[allHoldings,setAllHoldngs]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      setAllHoldngs(res.data);
    })
  })
  const labels=allHoldings.map((stock)=>stock["name"]);
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

  return (
    <>
      <h3 className="title">Holdings (13)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock,index)=>{
            const currValue=stock.price*stock.qty;
            const avgValue=stock.avg*stock.qty;
            const profitOrLoss=currValue-avgValue;
            const isProfit=profitOrLoss>0.0;
            const isProfitC=isProfit?"profit":"loss";
            const isDayChange=stock.isLoss?"loss":"profit";

            return(
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={isProfitC}>{profitOrLoss.toFixed(2)}</td>
                <td className={isProfitC}>{stock.net}</td>
                <td className={isDayChange}>{stock.day}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
       <VerticalChart data={data}/>
    </>
  );
};

export default Holdings;
