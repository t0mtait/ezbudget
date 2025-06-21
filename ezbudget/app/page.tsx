import { DarkThemeToggle } from "flowbite-react";
import TransactionCreator from "./components/NewTransaction";
import Transactions from "./components/Transactions";
import Cards from "./components/Cards";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
      <Cards />
      <TransactionCreator />
      <Transactions />
    </main>
  );
}
