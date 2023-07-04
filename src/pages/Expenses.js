import React, { useState, useEffect } from 'react';

const apiUrl = 'http://localhost:3001/api/expenses';

export function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          throw new Error('Authentication token not found');
        }

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setExpenses(data.expenses);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    fetchExpenses();
  }, []); // Empty dependency array, so useEffect runs only once when the component mounts

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mx-auto max-w-md">
      <table className="w-full divide-y divide-gray-100">
        <thead>
          <tr>
            <th className="text-center">Description</th>
            <th className="text-center">Date</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Category ID</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className="text-center">{expense.description}</td>
              <td className="text-center">{expense.date}</td>
              <td className="text-center">${expense.amount}</td>
              <td className="text-center">{expense.category_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
