// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./Components/Sidebar";
// import './App.css';
// import Appointment from "./Pages/Appointment";
// import AllPatient from "./Pages/AllPatient";
// import FinanceAccounting from "./Pages/FinanceAccounting";
// import Settings from "./Pages/Settings";
// import Dashboard from "./Pages/Dashboard";
// import BookAppointmentForm from "./Components/BookAppointmentForm";
// import Login from "./Components/Login";
// import { AuthProvider, useAuth } from "./Context/AuthContext"; // Import from new file
// import Inventory from "./Pages/Inventory";
// import PageNotFound from "./Components/PageNotFound";
// import ConsultationSetup from './Pages/ConsultationSetup'
// import MedicineSetup from './Pages/MedicineSetup'
// import PatientForm from './Components/PatientForm'
// import PatientFormAleoPathy from "./Components/PatientFormAleoPathy";
// import UnifiedPatientForm from "./Components/FormsSections/UnifiedPatientForm";
// import PatientDetails from "./Pages/PatientDetails";
// import Profile from "./Pages/Profile";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import ShowBookings from './Components/ShowBooking'
// // Private Route Component
// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? (
//     <div className="flex bg-background w-full min-h-screen pb-20">
//       <Sidebar />
//       <main className="flex-1 sm:ms-4 lg:mx-4 sm:mx-auto pt-5 ">
//         <Element {...rest} />
//       </main>
//     </div>
//   ) : (
//     <Navigate to="/" replace />
//   );
// };

// function App() {
//   // Create a QueryClient instance
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: 1, // Number of retries on failure
//         refetchOnWindowFocus: false, // Prevent refetch on window focus
//         staleTime: 5 * 60 * 1000, // 5 minutes
//       },
//     },
//   });

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <AuthProvider>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/doctor/Dashboard" element={<PrivateRoute element={Dashboard} />} />
//             <Route path="/doctor/Appointment" element={<PrivateRoute element={Appointment} />} />
//             <Route path="/doctor/AllPatient" element={<PrivateRoute element={AllPatient} />} />
//             <Route path="/doctor/FinanceAccounting" element={<PrivateRoute element={FinanceAccounting} />} />
//             <Route path="/doctor/support" element={<PrivateRoute element={() => <h1>Support Page</h1>} />} />
//             <Route path="/doctor/settings" element={<PrivateRoute element={Settings} />} />
//             <Route path="/doctor/Appointment/bookappointmentform" element={<PrivateRoute element={BookAppointmentForm} />} />
//             <Route path="/doctor/settings/inventory" element={<PrivateRoute element={Inventory} />} />
//             <Route path="/doctor/settings/consultation-setup" element={<PrivateRoute element={ConsultationSetup} />} />
//             <Route path="/doctor/settings/medicine-setup" element={<PrivateRoute element={MedicineSetup} />} />
//             <Route path="/doctor/Appointment/patient-form" element={<PrivateRoute element={UnifiedPatientForm} />} />
//             <Route path="/doctor/Appointment/aleo-patient-form" element={<PrivateRoute element={PatientFormAleoPathy} />} />
//             <Route path="/doctor/Appointment/aurvedic" element={<PrivateRoute element={PatientForm} />} />
//             <Route path="/doctor/Appointment/patient-details" element={<PrivateRoute element={PatientDetails} />} />
//             <Route path="/doctor/profile" element={<PrivateRoute element={Profile} />} />
//             {/* <Route path="/doctor/show-booking" element={<PrivateRoute element={ShowBookings} />} /> */}
//             <Route path="/*" element={<PrivateRoute element={PageNotFound} />} />
//             {/* <Route path="/tv-view-setup" element={<TVViewSetup />} /> */}
//             {/* <Route path="/consultation-setup" element={<ConsultationSetup />} /> */}
//             {/* <Route path="/general-settings" element={<GeneralSettings />} /> */}
//             {/* <Route path="/claim-help" element={<ClaimHelp />} /> */}
//             {/* <Route path="/" element={<PrivateRoute element={Dashboard} />} /> */}
//           </Routes>
//         </AuthProvider>
//       </Router>
//     </QueryClientProvider>
//   );
// }

// export default App;

import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import { AuthProvider, useAuth } from "./Context/AuthContext";
import Inventory from "./Pages/Inventory";
import PageNotFound from "./Components/PageNotFound";
import ConsultationSetup from './Pages/ConsultationSetup';
import MedicineSetup from './Pages/MedicineSetup';
import PatientForm from './Components/PatientForm';
import PatientFormAleoPathy from "./Components/PatientFormAleoPathy";
import UnifiedPatientForm from "./Components/FormsSections/UnifiedPatientForm";
import PatientDetails from "./Pages/PatientDetails";
import Profile from "./Pages/Profile";

// Private Route Component
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="flex bg-background w-full min-h-screen pb-20">
      <Sidebar />
      <main className="flex-1 sm:ms-4 lg:mx-4 sm:mx-auto pt-5 ">
        <Element {...rest} />
      </main>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

function App() {
  // Create a QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1, // Number of retries on failure
        refetchOnWindowFocus: false, // Prevent refetch on window focus
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="/doctor/settings/consultation-setup" element={<PrivateRoute element={ConsultationSetup} />} />
            <Route path="/doctor/settings/medicine-setup" element={<PrivateRoute element={MedicineSetup} />} />
            <Route path="/doctor/Appointment/patient-form" element={<PrivateRoute element={UnifiedPatientForm} />} />
            <Route path="/doctor/Appointment/aleo-patient-form" element={<PrivateRoute element={PatientFormAleoPathy} />} />
            <Route path="/doctor/Appointment/aurvedic" element={<PrivateRoute element={PatientForm} />} />
            <Route path="/doctor/Appointment/patient-details" element={<PrivateRoute element={PatientDetails} />} />
            <Route path="/doctor/profile" element={<PrivateRoute element={Profile} />} />
            <Route path="/*" element={<PrivateRoute element={PageNotFound} />} />
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;