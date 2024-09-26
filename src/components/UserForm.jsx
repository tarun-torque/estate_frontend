import { useEffect, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function UserForm() {
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
  const [users, setUsers] = useState([]);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/dashboard", { state: { userData: formData } });
    setFormData({
      jobTitle: "",
      firstName: "",
      lastName: "",
      phone: "",
      username: "",
      email: "",
      password: "",
      companyEmail: "",
    });
  };
  useEffect(() => {
    if (location.state && location.state.userData) {
      // Prevent adding duplicate user
      const existingUser = users.find(
        (user) => user.email === location.state.userData.email
      );

      if (!existingUser) {
        setUsers((prevUsers) => [
          ...prevUsers,
          { ...location.state.userData, key: prevUsers.length }, // Add new user with unique key
        ]);
      }
    }
  }, [location.state]);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-blue-100 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-8 bg-gray-100 rounded-md h-[90vh] shadow-md w-3/4 mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-950">
          User Information
        </h2>
        <p className="text-sm text-gray-950">
          Please fill in the information below. The fields marked with * are
          required.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-950"
              >
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-950"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-950"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-950"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-950"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-950"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-950"
              >
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex mt-5 items-center pr-3"
              >
                {passwordVisible ? (
                  <FaRegEyeSlash className="h-5 w-5 text-gray-9500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-9500" />
                )}
              </button>
            </div>

            <div>
              <label
                htmlFor="companyEmail"
                className="block text-sm font-medium text-gray-950"
              >
                Company Email
              </label>
              <input
                type="email"
                name="companyEmail"
                id="companyEmail"
                placeholder="Company Email"
                value={formData.companyEmail}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 w-full flex items-center justify-center">
          <button
            type="submit"
            className="w-44 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
