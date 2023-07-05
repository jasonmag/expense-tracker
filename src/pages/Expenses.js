import React, { useState, useEffect } from 'react';

const apiUrl = 'http://localhost:3001/api/expenses';
const categoriesApiUrl = 'http://localhost:3001/api/categories';

export function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState({});

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

    async function fetchCategories() {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          throw new Error('Authentication token not found');
        }

        const response = await fetch(categoriesApiUrl, {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const categoryData = data.categories.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});
        setCategories(categoryData);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchExpenses();
    fetchCategories();
  }, []);

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
            <th className="text-center">Date</th>
            <th className="text-left">Category</th>
            <th className="text-left">Description</th>
            <th className="text-center">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className="text-center">{expense.date}</td>
              <td className="text-left">{categories[expense.category_id]}</td>
              <td className="text-left">{expense.description}</td>
              <td className="text-right">${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
