"use client";
import { useState } from "react";

import { Button, TextInput } from "flowbite-react";

export default function TransactionCreator() {
  const [productName, setProductName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // set default date to today
  if (!date) {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDate(formattedDate);
  }
  const [setCategory] = useState("Want");


  async function handleSubmit(selectedCategory) {
    await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: productName,
        store: storeName,
        amount,
        date,
        category: selectedCategory,
      }),
    });
    
    // Reset form after successful submission
    setProductName("");
    setStoreName("");
    setAmount("");
    setDate("");
    setCategory("Want");
  }
  return (
    <div className="mb-3 flex w-1/2 flex-col gap-4">
      <div>
        <TextInput
          id="productName"
          type="text"
          color="success"
          placeholder="Product / Service Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <TextInput
          id="storeName"
          type="text"
          color="success"
          placeholder="Store / Provider Name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />
      </div>

      <div>
        <TextInput
          id="amount"
          type="number"
          color="success"
          placeholder="Amount spent"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div>
        <TextInput
          id="date"
          type="date"
          color="success"
          placeholder="Purchase date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-4">
        <Button
          color="green"
          onClick={() => handleSubmit("Want")}
          type="button"
          className="w-1/3 hover:bg-red-700  dark:hover:bg-red-700 bg-red-500 dark:bg-red-500"
        >
          Want
        </Button>

        <Button
          color="green"
          onClick={() => handleSubmit("Need")}
          type="button"
          className="w-1/3 hover:bg-yellow-700 dark:hover:bg-yellow-700 bg-yellow-500  dark:bg-yellow-500"
        >
          Need
        </Button>

        <Button
          color="green"
          onClick={() => handleSubmit("Investment")}
          type="button"
          className="w-1/3 hover:bg-green-700 dark:hover:bg-green-700 bg-green-500 dark:bg-green-500"
        >
          Investment
        </Button>
      </div>
    </div>
  );
}
