import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

function TenentLoginPage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/dashboard");
  };

  const handleGoToSignup = () => {
    navigate("/login");
  };

  const handleGoToLoginPage = () => {
    navigate("/");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#191244]">
      {/* Container */}
      <div className="flex w-2/3 max-w-4xl shadow-gray-600 bg-gray-50 shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-center items-center p-8">
          {/* <h1 className="text-5xl font-bold font-mono">3access</h1>*/}
          <p className="text-lg mt-2">Tenants Login Page</p> 
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-8">
          {/* <h2 className="text-3xl font-bold text-blue-900 mb-2">3access</h2>
          <p className="text-md text-blue-900 mb-6">Estate Solution</p> */}

          <form className="flex flex-col space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="user@3access.com"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center mt-6 pr-3"
              >
                {passwordVisible ? (
                  <FaRegEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full"
              onClick={handleSignup}
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="mt-4">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-6 flex justify-between text-sm">
            <span
              onClick={handleGoToSignup}
              className="text-blue-600 underline cursor-pointer"
            >
              Get New Company Account?
            </span>
            <span
              onClick={handleGoToLoginPage}
              className="text-blue-600 underline cursor-pointer"
            >
              Login with Company Account?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenentLoginPage;
