import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3001/api/account_types";
const authToken = localStorage.getItem('authToken');

export const AccountType = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(API_URL, { name: name }, { headers: { Authorization: `${authToken}` } })
      .then((response) => {
        console.log("Response:", response.data);
        setName('');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Account Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter account name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};