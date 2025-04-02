import Home from "./pages/Home/Home";
import Home2 from "./pages/Home2/Home2";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home2/>} key="home" />
        <Route path="/home2" element={<Home />} key="home" />
      </Routes>
    </>
  );
}

export default App;
