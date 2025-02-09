import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStock } from "../features/stock/stockSlice.js";

const Purchases = () => {
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [cost, setCost] = useState("");
    const dispatch = useDispatch();

    const handleAddPurchase = () => {
        const newPurchase = {
        id: Date.now(),
        product: product,
        quantity: Number(quantity),
        cost: cost,
        };
        dispatch(addStock(newPurchase));
        setProduct("");
        setQuantity("");
        setCost("");
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Purchases</h2>
        <div className="mb-4 flex space-x-2">
            <input
            type="text"
            placeholder="Product Name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="border p-2 rounded w-full"
            />
            <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 rounded w-24"
            />
            <input 
            type="number"
            placeholder="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="border p-2 rounded w-24"
            />
            <button
            onClick={handleAddPurchase}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            Purchase
            </button>
        </div>
        </div>
    );
};

export default Purchases;
