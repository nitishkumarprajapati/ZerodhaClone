import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  Close,
} from "@mui/icons-material";
import axios from "axios"
import { Donaught } from "./Donaught";

const WatchList = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleBuyClick = (stock) => {
    setSelectedStock(stock);
  };

  const handleCloseBuyWindow = () => {
    setSelectedStock(null);
  };
  const data = {
    labels: watchlist.map((subArray)=>subArray["name"]),
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock)=>stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 5)',
          'rgba(54, 162, 235, 5)',
          'rgba(255, 206, 86, 5)',
          'rgba(75, 192, 192, 5)',
          'rgba(153, 102, 255, 5)',
          'rgba(255, 159, 64, 5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock) => (
          <WatchListItem
            stock={stock}
            key={stock.name}
            onBuyClick={handleBuyClick}
          />
        ))}
      </ul>
      <Donaught data={data} />

      {selectedStock && (
        <BuyActionWindow stock={selectedStock} onClose={handleCloseBuyWindow} />
      )}
    </div>
  );
};

const WatchListItem = ({ stock, onBuyClick }) => {
  const [showWatchActions, setShowWatchActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchActions(true)}
      onMouseLeave={() => setShowWatchActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchActions && (
        <WatchListActions stock={stock} onBuyClick={onBuyClick} />
      )}
    </li>
  );
};

const WatchListActions = ({ stock, onBuyClick }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy B" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => onBuyClick(stock)}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell S" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics A"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

const BuyActionWindow = ({ stock, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(stock.price);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const estimatedTotal = Number(quantity || 0) * Number(price || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: stock.name,
        qty: Number(quantity),
        price: Number(price),
        mode: "BUY",
      });
      onClose();
    } catch (error) {
      console.error("Failed to place buy order", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="buy-window-overlay" onClick={onClose}>
      <form className="buy-window" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <div className="buy-window-header">
          <div>
            <h3>Buy {stock.name}</h3>
            <p>NSE {stock.price}</p>
          </div>
          <button type="button" className="icon-button" onClick={onClose}>
            <Close />
          </button>
        </div>

        <div className="buy-window-body">
          <label className="field">
            <span>Qty.</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>

          <label className="field">
            <span>Price</span>
            <input
              type="number"
              min="0"
              step="0.05"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <div className="buy-window-summary">
            <p>Margin required</p>
            <strong>Rs. {estimatedTotal.toFixed(2)}</strong>
          </div>
        </div>

        <div className="buy-window-footer">
          <button type="button" className="btn btn-grey" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-blue" disabled={isSubmitting}>
            {isSubmitting ? "Placing..." : "Buy"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WatchList;
