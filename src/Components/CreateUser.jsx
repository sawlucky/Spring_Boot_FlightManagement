import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    source: "",
    destination: "",
  });
  const saveData = async (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:8080/create", userInfo);
      console.log(userInfo);
      setUserInfo({
        name: "",
        source: "",
        destination: "",
      });
      alert("User created successfully!");
    } catch (error) {
      console.error("Error saving data:", error.message);
      alert("Error saving data. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const fields = [
    { name: "name", label: "Name" },
    { name: "source", label: "Source" },
    { name: "destination", label: "Destination" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="mb-6">
        <Link to="/" className="ml-0">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 shadow-md transition duration-300">
            Home
          </button>
        </Link>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create User
        </h2>
        <form
          action="/create"
          method="post"
          onSubmit={saveData}
          className="space-y-4"
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                id={field.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={userInfo[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
