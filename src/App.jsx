import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyUiNavbar/daisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOption from "./components/pricingOption/PricingOption";

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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
