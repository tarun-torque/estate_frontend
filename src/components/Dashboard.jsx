import { TiWorld } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { Space, Table } from "antd";
// import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Dashboard({ formData }) {
  console.log(formData, "654654654654654");
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation(); // Already getting location state

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.userData) {
      const existingUser = users.find(
        (user) => user.email === location.state.userData.email
      );

      if (!existingUser) {
        const newUser = { ...location.state.userData, key: users.length };
        setUsers((prevUsers) => [...prevUsers, newUser]);
      }
    }
  }, [location.state, users]);

  // Delete user function
  const handleDelete = (key) => {
    setUsers(users.filter((user) => user.key !== key));
  };

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Define columns for the table
  const columns = [
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex bg-gray-100">
      <div className="w-64 h-screen bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100 h-[100%]">
        <nav className="h-16 py-4 px-6 w-full bg-gray-100 shadow-md flex items-center justify-between">
          <div className="flex-grow">
            <input
              type="text"
              name="search"
              placeholder="Search by first name..."
              value={searchInput}
              onChange={handleChange}
              className="h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
            />
          </div>
          <div className="flex items-center justify-between w-[20%]">
            <TiWorld className="text-gray-600" style={{ fontSize: "24px" }} />
            <Link to="/">
              <h2 className="text-xl font-semibold text-gray-800">Logout</h2>
            </Link>
            <FaRegUser className="text-gray-600" style={{ fontSize: "24px" }} />
          </div>
        </nav>

        <div className="w-[95%] h-12 bg-white text-sm flex items-center my-4 mx-auto p-2 py-3 rounded-sm shadow-md">
          Home <GrFormNext /> Dashboard
        </div>

        <div className="flex flex-wrap justify-around  items-center  mt-4">
          <div className="w-[16%] h-28  bg-gradient-to-r from-cyan-700 to-blue-700 rounded-2xl shadow-md flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Total Users</h2>
          </div>
          <div className="w-[16%] h-28  bg-gradient-to-r from-cyan-700 to-blue-700 rounded-2xl shadow-md flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Active Users</h2>
          </div>
          <div className="w-[16%] h-28  bg-gradient-to-r from-cyan-700 to-blue-700 rounded-2xl shadow-md flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Inactive Users</h2>
          </div>
          <div className="w-[16%] h-28  bg-gradient-to-r from-cyan-700 to-blue-700 rounded-2xl shadow-md flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Pending Users</h2>
          </div>
        </div>
        <div>
          <h1>Dashboard</h1>
          <h2>User Information</h2>
          {/* <p>Job Title: {formData.jobTitle}</p>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Phone: {formData.phone}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Company Email: {formData.companyEmail}</p> */}
        </div>
        <div className="w-[95%] h-40 bg-white mx-auto rounded-sm shadow-md my-2">
          <h2
            className="float-right text-sm font-medium mb-4 px-5 py-2 rounded-lg m-2 text-white bg-blue-700 cursor-pointer"
            onClick={() => navigate("/create-user")}
          >
            Create
          </h2>
          <div className="w-[95%] mx-auto my-2">
            <Table
              columns={columns}
              dataSource={filteredUsers}
              pagination={{
                pageSizeOptions: ["5", "10", "20"],
                showSizeChanger: true,
                pageSize: 10,
                showQuickJumper: true,
              }}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }
              summary={() => (
                <Table.Summary fixed>
                  <Table.Summary.Row>
                    <Table.Summary.Cell>Total Users</Table.Summary.Cell>
                    <Table.Summary.Cell colSpan={5}>
                      {users.length}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
              style={{ borderRadius: "8px", overflow: "hidden" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
