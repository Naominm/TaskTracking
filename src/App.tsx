import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import SecondPage from "./pages/Second";
import NavBar from "./components/NavBar";

function App() {
  const { pathname } = useLocation();
  const hideNavbar = pathname === "/";
  return (
    <>
      {!hideNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </>
  );
}
export default App;
