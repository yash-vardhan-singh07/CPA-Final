import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yash from "./pages/Yash";
import Shivam from "./pages/Shivam";
import Gift from "./pages/Gift";
import Praharsh from "./pages/Praharsh";
import Claim from "./pages/Claim";
import alag from "./pages/alag";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Yash />} />
        <Route path="/reward" element={<Praharsh />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/claims" element={<Shivam />} />
        <Route path="/claim" element={<Shivam />} />
        <Route path="/amzn" element={<Shivam />} />
        <Route path="/claimgift" element={<Claim />} />
        <Route path="/rewards" element={<alag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
