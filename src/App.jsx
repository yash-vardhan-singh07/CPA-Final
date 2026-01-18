import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yash from "./pages/Yash";
import Shivam from "./pages/Shivam";
import Gift from "./pages/Gift";
import Praharsh from "./pages/Praharsh";
import Claim from "./pages/Claim";
import Aaag from "./pages/Aaag";
import Amz from "./pages/Amz";

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
        <Route path="/rewards" element={<Aaag />} />
        <Route path="/amzn" element={<Amz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
