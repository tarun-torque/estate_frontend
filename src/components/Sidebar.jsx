import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { RiMenuFold4Fill } from "react-icons/ri";
import { FaInbox } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { IoGrid } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const Sidebar = () => {
  const userName = "Admin";

  // State to track the open/close state of each section
  const [openSections, setOpenSections] = useState({
    dashboard: false,
    properties: false,
    tenants: false,
    staff: false,
    settings: false,
  });

  // Function to toggle the sub-items visibility
  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      <h2 className="text-3xl text-center mx-auto mt-3 font-bold mb-4">
        3access
      </h2>

      {/* User Logo and Welcome Message */}
      <div className=" w-[60px] h-[60px] ml-24 flex items-center justify-center rounded-full bg-gray-500">
        <CiUser className="text-white  text-2xl"/>
      </div>

      <p className="text-lg font-semibold mb-4 ml-14">Welcome, {userName}!</p>

      <div className="bg-gray-700 h-full border border-gray-700 text-gray-100">
        <ul className="text-sm font-medium text-gray-50">
          {/* Dashboard Section */}
          <li className="border-b-2 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <AiFillDashboard style={{ marginRight: "14px" }} />
              <Link >Dashboard</Link>
            </div>
            <button onClick={() => toggleSection("dashboard")}>
              {openSections.dashboard ? "▲" : "▼"}
            </button>
          </li>
          {openSections.dashboard && (
            <ul className="ml-6 mt-2">
              <li className="p-2 hover:bg-gray-600">
                <Link to="/form/overview">Overview</Link>
              </li>
              <li className="p-2 hover:bg-gray-600">
                <Link to="/form/reports">Reports</Link>
              </li>
            </ul>
          )}

          {/* Properties Section */}
          <li className="border-b-2 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <RiMenuFold4Fill style={{ marginRight: "14px" }} />
              Properties
            </div>
            <button onClick={() => toggleSection("properties")}>
              {openSections.properties ? "▲" : "▼"}
            </button>
          </li>
          {openSections.properties && (
            <ul className="ml-6 mt-2">
              <li className="p-2 hover:bg-gray-600">
                <Link to="/properties/list">List Properties</Link>
              </li>
              <li className="p-2 hover:bg-gray-600">
                <Link to="/properties/add">Add Property</Link>
              </li>
            </ul>
          )}

          {/* Tenants Section */}
          <li className="border-b-2 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <FaInbox style={{ marginRight: "14px" }} />
              Tenants
            </div>
            <button onClick={() => toggleSection("tenants")}>
              {openSections.tenants ? "▲" : "▼"}
            </button>
          </li>
          {openSections.tenants && (
            <ul className="ml-6 mt-2">
              <li className="p-2 hover:bg-gray-600">
                <Link to="/tenants/list">List Tenants</Link>
              </li>
              <li className="p-2 hover:bg-gray-600">
                <Link to="/tenants/add">Add Tenant</Link>
              </li>
            </ul>
          )}

          {/* Staff Section */}
          <li className="border-b-2 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <RiGalleryFill style={{ marginRight: "14px" }} />
              Staff
            </div>
            <button onClick={() => toggleSection("staff")}>
              {openSections.staff ? "▲" : "▼"}
            </button>
          </li>
          {openSections.staff && (
            <ul className="ml-6 mt-2">
              <li className="p-2 hover:bg-gray-600">
                <Link to="/staff/list">List Staff</Link>
              </li>
              <li className="p-2 hover:bg-gray-600">
                <Link to="/staff/add">Add Staff</Link>
              </li>
            </ul>
          )}

          {/* Settings Section */}
          <li className="border-b-2 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <RiPagesLine style={{ marginRight: "14px" }} />
              Settings
            </div>
            <button onClick={() => toggleSection("settings")}>
              {openSections.settings ? "▲" : "▼"}
            </button>
          </li>
          {openSections.settings && (
            <ul className="ml-6 mt-2">
              <li className="p-2 hover:bg-gray-600">
                <Link to="/settings/profile">Profile Settings</Link>
              </li>
              <li className="p-2 hover:bg-gray-600">
                <Link to="/settings/security">Security Settings</Link>
              </li>
            </ul>
          )}

          {/* Go To Website Section (No sub-items) */}
          <li className="border-b-2 p-3 flex items-center">
            <IoGrid style={{ marginRight: "14px" }} />
            <Link to="/website">Go To Website</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
