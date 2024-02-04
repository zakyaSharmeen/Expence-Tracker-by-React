import React from "react";
import Header from "../components/Header";
import Balance from "../components/Balance";
import Incomexpence from "../components/Incomexpence";
import Transactionlist from "../components/Transactionlist";
import Addtransition from "../components/Addtransition";
import { GlobalProvider } from "../context/Globalstate";

function App() {
  return (
    <GlobalProvider>
      <Header />
      {/* <h1>Zakku</h1> */}
      <div className="container">
        <Balance />
        <Incomexpence />
        <Transactionlist />
        <Addtransition />
      </div>
    </GlobalProvider>
  );
}

export default App;
