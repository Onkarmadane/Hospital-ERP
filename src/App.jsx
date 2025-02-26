import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import './App.css';
import Appointment from "./Pages/Appointment";
import AllPatient from "./Pages/AllPatient";
import FinanceAccounting from "./Pages/FinanceAccounting";
import Settings from "./Pages/Settings";
import Dashboard from "./Pages/Dashboard";
import BookAppointmentForm from "./Components/BookAppointmentForm";
import Login from "./Components/Login";
import { AuthProvider, useAuth } from "./Context/AuthContext"; // Import from new file
import Inventory from "./Pages/Inventory";
import PageNotFound from "./Components/PageNotFound";
// Private Route Component
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="flex bg-white text-black w-full h-screen">
      <Sidebar />
      <main className="flex-1 sm:ms-4 lg:mx-4 sm:mx-auto pt-5 ">
        <Element {...rest} />
      </main>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/doctor/Dashboard" element={<PrivateRoute element={Dashboard} />} />
          <Route path="/doctor/Appointment" element={<PrivateRoute element={Appointment} />} />
          <Route path="/doctor/AllPatient" element={<PrivateRoute element={AllPatient} />} />
          <Route path="/doctor/FinanceAccounting" element={<PrivateRoute element={FinanceAccounting} />} />
          <Route path="/doctor/support" element={<PrivateRoute element={() => <h1>Support Page</h1>} />} />
          <Route path="/doctor/settings" element={<PrivateRoute element={Settings} />} />
          <Route path="/doctor/Appointment/bookappointmentform" element={<PrivateRoute element={BookAppointmentForm} />} />
          <Route path="/doctor/settings/inventory" element={<PrivateRoute element={Inventory} />} />
          <Route path="/*" element={<PrivateRoute element={PageNotFound} />} />
          {/* <Route path="/tv-view-setup" element={<TVViewSetup />} /> */}
          {/* <Route path="/consultation-setup" element={<ConsultationSetup />} /> */}
          {/* <Route path="/general-settings" element={<GeneralSettings />} /> */}
          {/* <Route path="/claim-help" element={<ClaimHelp />} /> */}
          {/* <Route path="/" element={<PrivateRoute element={Dashboard} />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;