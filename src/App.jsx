import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyUiNavbar/daisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOption from "./components/pricingOption/PricingOption";
import ResultsCharts from "./components/ResultCharts/ResultsCharts";
import NumberCharts from "./components/NumberCharts/NumberCharts";

function App() {
  const pricingOptions = fetch("pricingData.json").then((res) => res.json());
  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-dots ml-[50%] mt-56 loading-md"></span>
          }
        >
          <PricingOption pricingOptions={pricingOptions}></PricingOption>
        </Suspense>

        <ResultsCharts></ResultsCharts>
        <NumberCharts></NumberCharts>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
