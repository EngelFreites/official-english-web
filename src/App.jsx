import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";

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
