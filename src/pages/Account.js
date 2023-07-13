import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3001/api/accounts";
const ACCOUNT_TYPES_URL = "http://localhost:3001/api/account_types";
const authToken = localStorage.getItem('authToken');

export const Account = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [accountTypeId, setAccountTypeId] = useState('');
  const [accountTypes, setAccountTypes] = useState([]);

  useEffect(() => {
    const fetchAccountTypes = async () => {
      try {
        const response = await axios.get(ACCOUNT_TYPES_URL, {
          headers: {
            Authorization: authToken
          }
        });

        setAccountTypes(response.data.account_type);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAccountTypes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        name,
        description,
        accountTypeId
      }, {
        headers: {
          Authorization: authToken
        }
      });

      console.log(response.data);

      setName('');
      setDescription('');
      setAccountTypeId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="accountType" className="block font-bold mb-2">Account Type:</label>
          <select
            id="accountType"
            value={accountTypeId}
            onChange={(event) => setAccountTypeId(event.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select Account Type</option>
            {accountTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
