import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const totalRevenue = useSelector((state) => state.stock.totalRevenue);
  const totalExpense = useSelector((state) => state.stock.totalExpense);
  const stock = useSelector((state) => state.stock.stock);

  return (
    <div className="bg-white w-2xl p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-200 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-xl font-bold">${totalRevenue}</p>
        </div>
        <div className="p-4 bg-red-200 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Expenses</h3>
          <p className="text-xl font-bold">${totalExpense}</p>
        </div>
        <div className="p-4 bg-blue-200 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Stock Items</h3>
          <p className="text-xl font-bold">{stock.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
