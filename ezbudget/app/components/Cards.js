import { Card } from "flowbite-react";

export default function Cards() {
  return (
    <div className="mb-2 flex">
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="m-0 text-2xl font-bold text-white">Total Spent</h5>
        <h1 className="text-2xl font-bold text-green-400">3,451.09$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Spent: Want
        </h5>
        <h1 className="text-2xl font-bold text-red-400">1,290.43$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Spent: Need
        </h5>
        <h1 className="text-2xl font-bold text-red-400">2,693.45$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Invested
        </h5>
        <h1 className="text-2xl font-bold text-green-400">365.81$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          vs. Past Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Monthly diff.
        </h5>
        <h1 className="text-2xl font-bold text-green-400">-433.87$</h1>
      </Card>
      <Card href="#" className="mx-2 max-w-sm">
        <h5 className="text-md font-bold tracking-tight text-gray-500">
          This Month
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Daily Avg.
        </h5>
        <h1 className="text-2xl font-bold text-red-400">116.82$</h1>
      </Card>
    </div>
  );
}
