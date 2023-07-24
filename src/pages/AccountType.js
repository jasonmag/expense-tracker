import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccountTypeTable from './AccountTypeTable';

const API_URL = "http://localhost:3001/api/account_types";
const authToken = localStorage.getItem('authToken');

export const AccountType = () => {
  const [name, setName] = useState('');
  const [accountTypes, setAccountTypes] = useState([]);

  const fetchAccountTypes = () => {
    axios
      .get(API_URL, { headers: { Authorization: `${authToken}` } })
      .then((response) => {
        setAccountTypes(response.data.account_type);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchAccountTypes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(API_URL, { name: name }, { headers: { Authorization: `${authToken}` } })
      .then((response) => {
        console.log("Response:", response.data);
        setName('');
        fetchAccountTypes(); // Fetch the updated account types after creating a new one.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEdit = (editedAccountType) => {
    // Make an API call to update the edited account type
    axios
      .put(`${API_URL}/${editedAccountType.id}`, editedAccountType, {
        headers: { Authorization: `${authToken}` },
      })
      .then((response) => {
        console.log("Edited Account Type:", response.data);
        fetchAccountTypes(); // Fetch the updated account types after editing.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = (accountId) => {
    // Make an API call to delete the account type
    axios
      .delete(`${API_URL}/${accountId}`, { headers: { Authorization: `${authToken}` } })
      .then((response) => {
        console.log("Deleted Account Type with ID:", accountId);
        fetchAccountTypes(); // Fetch the updated account types after deletion.
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
            Account Type Name
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

      {Array.isArray(accountTypes) && accountTypes.length > 0 ? (
        <AccountTypeTable
          accountTypes={accountTypes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <p>No account types found.</p>
      )}
    </div>
  );
};
