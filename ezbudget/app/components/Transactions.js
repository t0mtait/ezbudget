"use client";
import { Table, TableBody, TableCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      const rest = await fetch("/api/transactions");
      const data = await rest.json();
      if (Array.isArray(data)) {
        setTransactions(data);
      } else {
        setTransactions([]);
      }
    }
    fetchTransactions();
  }, []);
  return (
    <div className="w-1/2">
      <Table className="!bg-black text-white">
        <TableBody className="divide-y">
          <TableRow>
            <TableCell className="font-bold text-white">
              Purchase Date
            </TableCell>
            <TableCell className="font-bold text-white">Product Name</TableCell>
            <TableCell className="font-bold text-white">Store Name</TableCell>
            <TableCell className="font-bold text-white">Category</TableCell>
            <TableCell className="font-bold text-white">Cost</TableCell>
          </TableRow>
          {transactions.map((tx, idx) => (
            <TableRow key={idx} className="text-white">
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.product}</TableCell>
              <TableCell>{tx.store}</TableCell>
              <TableCell>{tx.category}</TableCell>
              <TableCell>{tx.amount}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
