import "./App.css";
import DaisyNav from "./components/DaisyUiNavbar/daisyNav";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <h1 className="text-2xl font-bold">Vite + React</h1>
    </>
  );
}

export default App;
