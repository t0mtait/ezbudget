"use client";
import { Table, TableBody, TableCell, TableRow, Button } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTransactions(transactions.filter((tx) => tx.id !== id));
      } else {
        console.error("Failed to delete transaction");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };
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
            <TableCell className="font-bold text-white">Action</TableCell>
          </TableRow>
          {transactions.map((tx, idx) => (
            <TableRow key={idx} className="text-white">
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.product}</TableCell>
              <TableCell>{tx.store}</TableCell>
              <TableCell>{tx.category}</TableCell>
              <TableCell>{tx.amount}$</TableCell>
              <TableCell><Button className="bg-red-500 dark:bg-red-500  dark:hover:bg-red-700 hover:bg-red-700" onClick={() => handleDelete(tx.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
