import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeStock } from "../features/stock/stockSlice";
import { ChevronDown, ShoppingCart } from "lucide-react";

const Sales = () => {
  const [selected, setSelected] = useState(null);
  const stock = useSelector((state) => state.stock.stock);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); 
  const [quantity, setQuantity] = useState(0);

  const handleAddSale = () => {
    if (selected) {
      dispatch(removeStock({ id: selected.id, quantity: quantity }));
      setSelected(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-40 space-y-4">
      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 w-48"
        >
          {selected ? selected.product : "Select an item"}
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 mt-2 w-48 bg-white border rounded-lg shadow-lg animate-fade-in">
            {stock.length > 0 ? (
              stock.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(false);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200 transition"
                >
                  {item.product}
                </button>
              ))
            ) : (
              <button className="block w-full text-left px-4 py-2 text-gray-500" disabled>
                No stock available
              </button>
            )}
          </div>
        )}
        
      </div>
      <div className="flex space-x-2 mt-0.5">
          <input 
          type="number"
          placeholder="Quantity"
          className="border p-2 rounded w-24"
          value={quantity}
          onChange={(e)=>setQuantity(e.target.value)} />
        </div>

      {/* Sell Button */}
      <button
        onClick={handleAddSale}
        disabled={!selected}
        className={`flex items-center px-4 py-2 rounded-lg shadow-md text-white transition-all duration-300 ${
          selected ? "bg-red-500 hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Sell Item
      </button>
    </div>
  );
};

export default Sales;
