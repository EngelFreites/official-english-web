import Home from "./pages/Home/Home";
import Home2 from "./pages/Home2/Home2";
import { Routes, Route } from "react-router";
import Pricing from "./pages/Pricing/Pricing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home2/>} key="home" />
        <Route path="/home2" element={<Home />} key="home" />
        <Route path="/pricing" element={<Pricing />} key="pricing" />
      </Routes>
    </>
  );
}

export default App;
