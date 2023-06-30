import React, { useState } from "react";
import axios from "axios";

// Define the constant variable here
const API_URL = "http://localhost:3001/api/expenses";

export const NewExpense = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the POST request here as well (in case you want to submit the form via button click)
    axios.post(API_URL, {
      amount: amount,
      category: category,
      date: date,
      description: description,
    })
    .then((response) => {
      // Handle the response if needed
      console.log("Response:", response.data);
      // Clear the form after successful submission
      setAmount('');
      setCategory('');
      setDate('');
      setDescription('');
    })
    .catch((error) => {
      // Handle errors if any
      console.error("Error:", error);
    });
  };


  return (
    <div className="px-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          {/* Existing code */}
        
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">New Expense</h2>
      
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                  Amount
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    value={amount} // Assign the state value to the input field
                    onChange={(e) => setAmount(e.target.value)} // Update the state when the input changes
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
      
              <div className="sm:col-span-2">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="category"
                    id="category"
                    value={category} // Assign the state value to the input field
                    onChange={(e) => setCategory(e.target.value)} // Update the state when the input changes
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
      
              <div className="sm:col-span-2">
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                  Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={date} // Assign the state value to the input field
                    onChange={(e) => setDate(e.target.value)} // Update the state when the input changes
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
      
              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={description} // Assign the state value to the textarea
                    onChange={(e) => setDescription(e.target.value)} // Update the state when the textarea changes
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
      
          {/* Existing code */}
        </div>
        <div className="py-4">
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};