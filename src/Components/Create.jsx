import React, { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Create = () => {
  const [userData, setAllUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/findall");
      console.log(response.data.data);
      setAllUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  const deleteData = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8080/delete/${id}`);
      //   const updateData = userData.filter((items) => items.id !== id);
      const index = userData.findIndex((user) => user.id === id);

      if (index !== -1) {
        const arr = [...userData];
        arr.splice(index, 1);
        setAllUserData(arr);

        alert("Data successfully deleted");
      }
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

  return userData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
        User Data
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-indigo-600 text-white uppercase text-sm">
              <th className="py-3 px-4 border-b">S.No</th>
              <th className="py-3 px-4 border-b">Full Name</th>
              <th className="py-3 px-4 border-b">Source</th>
              <th className="py-3 px-4 border-b">Destination</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                } hover:bg-gray-200`}
              >
                <td className="py-3 px-4 text-center border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b">{user.name}</td>
                <td className="py-3 px-4 border-b">{user.source}</td>
                <td className="py-3 px-4 border-b">{user.destination}</td>
                <td className="py-3 px-4 border-b">
                  <Link to={`/update/${user.id}`}>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      //   onClick={() => {
                      //     handleEdit(user.id);
                      //   }}
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => {
                      deleteData(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 shadow-md transition duration-300">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Create;
