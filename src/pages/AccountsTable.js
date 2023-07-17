import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ButtonLink from '../components/ButtonLink';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';


const API_URL = "http://localhost:3001/api/accounts";
const authToken = localStorage.getItem('authToken');

export const AccountsTable = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleEdit = () => {
    // Handle edit functionality
    console.log(`Editing item`);
  };

  const handleDelete = () => {
    // Handle delete functionality
    console.log(`Deleting item`);
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: authToken
          }
        });

        const accountsData = response.data.accounts;
        if (Array.isArray(accountsData)) {
          setAccounts(accountsData);
        } else if (typeof accountsData === 'object') {
          const accountsArray = Object.values(accountsData);
          console.log('accounts:', accountsArray);
          setAccounts(accountsArray);
        } else {
          setError('Invalid response format. Expected an array or object.');
        }

        setLoading(false);
      } catch (error) {
        setError('Error retrieving accounts.');
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Accounts</h1>
      <div class="text-right"><ButtonLink to="/account" text="Create New Account" /></div>
      <div className="py-2">
        <table className="w-full border border-gray-300 py-4">
          <thead>
            <tr>
              <th className="p-2 border-b">Name</th>
              <th className="p-2 border-b">Description</th>
              <th className="p-2 border-b">Account Type</th>
              <th className="p-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(account => (
              <tr key={account.id}>
                <td className="p-2 border-b">{account.name}</td>
                <td className="p-2 border-b">{account.description}</td>
                <td className="p-2 border-b">{account.accountTypeId || account.account_types_id}</td>
                <td className="p-2 border-b"><EditButton onClick={handleEdit}/><DeleteButton onClick={handleDelete} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
