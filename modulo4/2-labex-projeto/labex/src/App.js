import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import { AdminHomePage } from "./pages/AdminHomePage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { CreateTripPage } from "./pages/CreateTripPage";
import { HomePage } from "./pages/HomePage";
import { ListTripsPage } from "./pages/ListTripsPage";
import { LoginPage } from "./pages/LoginPage";
import { TripDetailsPage } from "./pages/TripDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="trips/list" element={<ListTripsPage />} />
        <Route path="trips/application/:tripId" element={<ApplicationFormPage />} />
        <Route path="admin/trips/list" element={<AdminHomePage />} />
        <Route path="admin/trips/:tripId" element={<TripDetailsPage />} />
        <Route path="admin/trips/create" element={<CreateTripPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 🔴 falta rotear o login