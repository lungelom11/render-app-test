import { BrowserRouter, Routes,Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage/HomePage"
import Finances from "./pages/Finances/Finances"
import Betway from "./pages/Betway/Betway"
import FPL from "./pages/FPL/FPL"
import Forex from "./pages/Forex/Forex"
import "./styles.css"

const Dashboard = () => {

  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/betway" element={<Betway />} />
            <Route path="/fpl" element={<FPL />} />
            <Route path="/forex" element={<Forex />} />

          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default Dashboard;