"use client";

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
export default function Cards() {
  const [totalSpent, setTotalSpent] = useState(0);
  const [wantSpent, setWantSpent] = useState(0);
  const [needSpent, setNeedSpent] = useState(0);
  const [invested, setInvested] = useState(0);
  const [avgSpentDaily, setAvgSpentDaily] = useState(0);
  useEffect(() => {
    async function fetchAndSum() {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      const currentDay = now.getDate();

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
    <div className="mb-2 flex">
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="m-0 text-2xl font-bold text-white">Total Spent</h5>
        <h1 className="text-2xl font-bold text-white">{totalSpent}$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Spent: Want
        </h5>
        <h1 className="text-2xl font-bold text-white">{wantSpent}$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Spent: Need
        </h5>
        <h1 className="text-2xl font-bold text-white">{needSpent}$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Invested
        </h5>
        <h1 className="text-2xl font-bold text-white">{invested}$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          vs. Last Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Monthly diff.
        </h5>
        <h1 className="text-2xl font-bold text-white">0$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Daily Avg.
        </h5>
        <h1 className="text-2xl font-bold text-white">{avgSpentDaily}$</h1>
      </Card>
    </div>
  );
}
