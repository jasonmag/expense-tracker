import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/api/expenses";
//TODO Add Accounts, Transaction Types
const authToken = localStorage.getItem('authToken');


export const NewExpense = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [acctBy, setAcctBy] = useState('');
  const [acctTo, setAcctTo] = useState('');
  const [transactionTypeId, setTransactionTypeId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(API_URL, {
      amount: amount,
      acct_by: acctBy,
      acct_to: acctTo,
      date: date,
      description: description,
      transaction_type_id: transactionTypeId,
    }, {
      headers: {
        Authorization: `${authToken}`,
      },
    })
      .then((response) => {
        console.log("Response:", response.data);
        setAmount('');
        setDate('');
        setDescription('');
        setAcctBy('');
        setAcctTo('');
        setTransactionTypeId('');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="px-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
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
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="acct_by" className="block text-sm font-medium leading-6 text-gray-900">
                  Account By
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="acct_by"
                    id="acct_by"
                    value={acctBy}
                    onChange={(e) => setAcctBy(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="acct_to" className="block text-sm font-medium leading-6 text-gray-900">
                  Account To
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="acct_to"
                    id="acct_to"
                    value={acctTo}
                    onChange={(e) => setAcctTo(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="transaction_type_id" className="block text-sm font-medium leading-6 text-gray-900">
                  Transaction Type ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="transaction_type_id"
                    id="transaction_type_id"
                    value={transactionTypeId}
                    onChange={(e) => setTransactionTypeId(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
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
