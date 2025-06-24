import { DarkThemeToggle } from "flowbite-react";
import TransactionCreator from "./components/NewTransaction";
import Transactions from "./components/Transactions";
import Cards from "./components/Cards";
import MyNavbar from "./components/MyNavbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24">
      <DarkThemeToggle className="absolute top-4 right-4" />
      <MyNavbar />
      <Cards />
      <TransactionCreator />
      <Transactions />
    </main>
  );
}
