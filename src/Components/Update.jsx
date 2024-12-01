import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Update = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState({
    id: "",
    name: "",
    source: "",
    destination: "",
  });

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/${id}`);
        const data = response.data.data;
        setUpdateData({
          id: data.id,
          name: data.name,
          source: data.source,
          destination: data.destination,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/update/${id}`, updateData);
      console.log(updateData);
      alert("Data updated successfully!");
    } catch (error) {
      alert("Cannot update data");
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Home Button */}
      <div className="mb-6">
        <Link to="/">
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 shadow-md transition duration-300">
            Home
          </button>
        </Link>
      </div>

      {/* Update Form */}
      <form
        action="/update"
        method="post"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Update User</h2>
        <input type="hidden" name="id" value={id} />
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={updateData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="source"
            className="block text-gray-600 font-medium mb-2"
          >
            Source
          </label>
          <input
            type="text"
            name="source"
            id="source"
            value={updateData.source}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="destination"
            className="block text-gray-600 font-medium mb-2"
          >
            Destination
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            value={updateData.destination}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
