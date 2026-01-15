import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yash from "./pages/Yash";
import Shivam from "./pages/Shivam";
import Gift from "./pages/Gift";
import Praharsh from "./pages/Praharsh";
import Claim from "./pages/Claim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Yash />} />
        <Route path="/reward" element={<Praharsh />} />
        <Route path="/rewards" element={<Shivam />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/claims" element={<Shivam />} />
        <Route path="/claim" element={<Shivam />} />
        <Route path="/amzn" element={<Shivam />} />
        <Route path="/claimgift" element={<Claim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
