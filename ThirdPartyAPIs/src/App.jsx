import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import BestSeller from "./components/pages/BestSeller";
import TodaysDeals from "./components/pages/TodaysDeals";
import Sell from "./components/pages/Sell";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/BestSeller" element={<BestSeller/>} />
        <Route path="/TodaysDeals" element={<TodaysDeals/>} />
        <Route path="/Sell" element={<Sell/>} />
      </Routes>
    </BrowserRouter>
  );
}
