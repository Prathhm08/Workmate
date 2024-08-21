import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Workers from "../pages/Workers/Workers";
import WorkersDetails from "../pages/Workers/WorkerDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/worker-account/Dashboard";
import CheckoutSuccess from "../pages/Workers/CheckoutSuccess";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Map from "../pages/servicesLinks/Map";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/workers" element={<Workers />} />
      <Route path="/workers/:id" element={<WorkersDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/location" element={<Map />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/workers/profile/me"
        element={
          <ProtectedRoute allowedRoles={["worker"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
