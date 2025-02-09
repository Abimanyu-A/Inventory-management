import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStock, removeStock } from "../features/stock/stockSlice.js";

const Stock = () => {
  const stock = useSelector((state) => state.stock.stock);
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddStock = () => {
    if (product && quantity > 0) {
      dispatch(addStock({
        id: Date.now(),
        product,
        quantity: Number(quantity),
      }));
      setProduct("");
      setQuantity("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Stock Management</h2>
      
      <ul className="mt-4 w-3xl">
        {stock.length > 0 ? (
          stock.map((item) => (
            <li key={item.id} className="flex justify-between border-b p-2">
              <span>{item.product} - {item.quantity} units <p className="text-green-500"> ₹ {item.cost}</p></span>
              <button
                onClick={() => dispatch(removeStock({ id: item.id, quantity: item.quantity }))}
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No stock available.</p>
        )}
      </ul>
    </div>
  );
};

export default Stock;
