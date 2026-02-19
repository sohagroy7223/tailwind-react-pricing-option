import "./App.css";
import DaisyNav from "./components/DaisyUiNavbar/daisyNav";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <DaisyNav></DaisyNav>
        <Navbar></Navbar>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
