"use client";
import { useState } from "react";

import { Button, TextInput, ButtonGroup, Select } from "flowbite-react";

export default function TransactionCreator() {
  const [productName, setProductName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Want");

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: productName,
        store: storeName,
        amount,
        date,
        category,
      }),
    });
  }
  return (
    <form className="mb-3 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
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
          placeholder="Amount spent"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <Select
        id="categories"
        required
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Want</option>
        <option>Need</option>
        <option>Investment</option>
      </Select>

      <Button color="green" type="submit" outline className="w-full">
        Submit
      </Button>
    </form>
  );
}
