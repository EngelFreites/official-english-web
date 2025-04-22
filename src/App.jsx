import Home2 from "./pages/Home2/Home2";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home2 />} key="home" />
      </Routes>
    </>
  );
}

export default App;
