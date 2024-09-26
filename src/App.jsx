import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";
import TenentLoginPage from "./components/TenentLoginPage";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    companyEmail: "",
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/tenantlogin" element={<TenentLoginPage />} />
        <Route path="/login" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/form"
          element={<UserForm formData={formData} setFormData={setFormData} />}
        />
        <Route path="/create-user" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
