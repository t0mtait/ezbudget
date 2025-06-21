import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
  ButtonGroup,
} from "flowbite-react";

export default function TransactionCreator() {
  return (
    <form className="flex w-full flex-col gap-4">
      <h1 className="text-white">EZ Budget v0.0.1</h1>
      <div>
        <TextInput
          id="productName"
          type="text"
          placeholder="Product / Service Name"
          required
        />
      </div>
      <div>
        <TextInput
          id="storeName"
          type="text"
          placeholder="Store / Provider Name"
          required
        />
      </div>

      <div>
        <TextInput
          id="amount"
          type="number"
          placeholder="Amount spent"
          required
        />
      </div>

      <ButtonGroup type="submit">
        <Button color="yellow" className="w-1/3">
          Want
        </Button>
        <Button color="blue" className="w-1/3">
          Need
        </Button>
        <Button color="green" className="w-1/3">
          Investment
        </Button>
      </ButtonGroup>
    </form>
  );
}
