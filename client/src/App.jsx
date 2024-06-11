import { Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Authorisation/Auth";
import Navbar from "./components/navbar";
import QrCodePage from "./pages/qr-code";
import ChartPage from "./pages/chart";
import Input from "./pages/input-field";
import Home from "./pages/home";
import ReportsPage from "./pages/ReportsPage";
import AdminIntro from "./pages/AdminIntro";
import AdminFetchUser from "./pages/AdminPage"
import QrCodeScan from "./pages/QrCodeScan";
import { useCookies } from "react-cookie";

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;
  const userRole = cookies.Role;
  

  return (
    <div>
      <div className="App">
        {!authToken && <Auth/>}

        {authToken &&
        <>
         <Navbar />
        <Routes>

        {userRole === 'admin' ? (
          <>
          <Route path="/" element={<AdminIntro />} />
          <Route path="/AdminPage" element={<AdminFetchUser />} />

          <Route path="/QRcodeScan" element={<QrCodeScan/>} />
          </>
        ) : (
          <>
          <Route path="/" element={<Home />} />

          <Route path="/Input" element={<Input />} />

          <Route path="/ChartPage" element={<ChartPage />} />

          <Route path="/QrCodePage" element={<QrCodePage />} />

          <Route path="/ReportsPage" element={<ReportsPage />} />

          </>
        )}
        </Routes>
        </>
        }
      </div>
    </div>
  );
}

export default App;
