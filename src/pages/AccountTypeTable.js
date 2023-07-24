import React from 'react';
import AccountTypeRow from './AccountTypeRow';

const AccountTypeTable = ({ accountTypes, onEdit, onDelete }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Account Type</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {accountTypes.map((type) => (
          <AccountTypeRow
            key={type.id}
            accountType={type}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AccountTypeTable;
