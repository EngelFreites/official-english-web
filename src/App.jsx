import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import Pricing from "./pages/Pricing/Pricing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} key="home" />
      </Routes>
    </>
  );
}

export default App;
