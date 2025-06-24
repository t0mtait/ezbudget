import { Button, TextInput, ButtonGroup } from "flowbite-react";

export default function TransactionCreator() {
  return (
    <form className="mb-3 flex w-full flex-col gap-4">
      <div>
        <TextInput
          id="productName"
          type="text"
          color="success"
          placeholder="Product / Service Name"
          required
        />
      </div>
      <div>
        <TextInput
          id="storeName"
          type="text"
          color="success"
          placeholder="Store / Provider Name"
          required
        />
      </div>

      <div>
        <TextInput
          id="amount"
          type="number"
          color="success"
          placeholder="Amount spent"
          required
        />
      </div>

      <ButtonGroup type="submit">
        <Button color="red" outline className="w-1/3">
          Want
        </Button>
        <Button color="blue" outline className="w-1/3">
          Need
        </Button>
        <Button color="green" outline className="w-1/3">
          Investment
        </Button>
      </ButtonGroup>
    </form>
  );
}
