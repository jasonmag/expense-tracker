import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the accountId from the URL
import { Account } from './Account'; // Import the Account component

export const AccountEdit = () => {
  // Get the accountId from the URL
  const { accountId } = useParams();

  return (
    <div>
      <h1>Edit Account</h1>
      <Account accountId={accountId} /> {/* Pass the accountId prop to the Account component */}
    </div>
  );
};
