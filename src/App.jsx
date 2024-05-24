import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import QrCodePage from "./pages/qr-code";
import ChartPage from "./pages/chart";
import Input from "./pages/input-field";
import Home from "./pages/home"
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/Input" element={<Input />}></Route>

          <Route path="/ChartPage" element={<ChartPage />}></Route>

          <Route path="/QrCodePage" element={<QrCodePage />}></Route>

          <Route path="/ReportsPage" element={<ReportsPage/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
