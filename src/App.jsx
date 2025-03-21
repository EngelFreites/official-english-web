import Home from "./pages/Home/Home";
import Home2 from "./pages/Home2/Home2";
import { Routes, Route, HashRouter } from "react-router";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} key="home" />
          <Route path="/home2" element={<Home2 />} key="home" />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
