"use client";

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
export default function Cards() {
  const [totalSpent, setTotalSpent] = useState(0);
  const [wantSpent, setWantSpent] = useState(0);
  const [needSpent, setNeedSpent] = useState(0);
  const [invested, setInvested] = useState(0);
  const [avgSpentDaily, setAvgSpentDaily] = useState(0);
  const [currentMonthName, setCurrentMonthName] = useState("");
  const [currentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    async function fetchAndSum() {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      const currentDay = now.getDate();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      const currentMonthName = months[currentMonth];
      setCurrentMonthName(currentMonthName);


      const sum = (Array.isArray(data) ? data : [])
        .filter((tx) => {
          const txDate = new Date(tx.date);
          return (
            txDate.getMonth() === currentMonth &&
            txDate.getFullYear() === currentYear
          );
        })
        .reduce((acc, tx) => acc + Number(tx.amount || tx.cost || 0), 0);

      const want = (Array.isArray(data) ? data : [])
        .filter((tx) => {
          const txDate = new Date(tx.date);
          return (
            txDate.getMonth() === currentMonth &&
            txDate.getFullYear() === currentYear &&
            tx.category == "Want"
          );
        })
        .reduce((acc, tx) => acc + Number(tx.amount || tx.cost || 0), 0);

      const need = (Array.isArray(data) ? data : [])
        .filter((tx) => {
          const txDate = new Date(tx.date);
          return (
            txDate.getMonth() === currentMonth &&
            txDate.getFullYear() === currentYear &&
            tx.category == "Need"
          );
        })
        .reduce((acc, tx) => acc + Number(tx.amount || tx.cost || 0), 0);

      const invested = (Array.isArray(data) ? data : [])
        .filter((tx) => {
          const txDate = new Date(tx.date);
          return (
            txDate.getMonth() === currentMonth &&
            txDate.getFullYear() === currentYear &&
            tx.category == "Investment"
          );
        })
        .reduce((acc, tx) => acc + Number(tx.amount || tx.cost || 0), 0);

      setTotalSpent(sum);
      setWantSpent(want);
      setNeedSpent(need);
      setInvested(invested);
      setAvgSpentDaily((sum / currentDay).toFixed(2));
    }
    fetchAndSum();
  }, []);
  return (
    <div className="mb-2 flex w-3/4 justify-center">
      <Card href="#" className="mx-2 max-w-sm !bg-black">
        <h5 className="text-lg font-bold tracking-tight text-gray-500">
        {currentMonthName} {currentYear}
        </h5>
        <h5 className="m-0 text-2xl font-bold text-white">Spent</h5>
        <h1 className="text-3xl font-bold text-white">{totalSpent}$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm !bg-black">
        <h5 className="text-lg font-bold tracking-tight text-gray-500">
          {currentMonthName} {currentYear}
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Spent: Want
        </h5>
        <h1 className="text-3xl font-bold text-white">{wantSpent}$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm !bg-black">
        <h5 className="text-lg font-bold tracking-tight text-gray-500">
          {currentMonthName} {currentYear}
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Spent: Need
        </h5>
        <h1 className="text-3xl font-bold text-white">{needSpent}$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm !bg-black">
        <h5 className="text-lg font-bold tracking-tight text-gray-500">
          {currentMonthName} {currentYear}
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Invested
        </h5>
        <h1 className="text-3xl font-bold text-white">{invested}$</h1>
      </Card>

      <Card href="#" className="mx-2 max-w-sm !bg-black">
        <h5 className="text-lg font-bold tracking-tight text-gray-500">
          {currentMonthName} {currentYear}
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Daily Avg.
        </h5>
        <h1 className="text-3xl font-bold text-white">{avgSpentDaily}$</h1>
      </Card>
    </div>
  );
}
