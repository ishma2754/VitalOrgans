import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import QrCodePage from "./pages/qr-code";
import ChartPage from "./pages/chart";
import Input from "./pages/input-field";
import Home from "./pages/home";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/Input" element={<Input />}/>

          <Route path="/ChartPage" element={<ChartPage />}/>

          <Route path="/QrCodePage" element={<QrCodePage />}/>

          <Route path="/ReportsPage" element={<ReportsPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
