import React, { useState } from 'react';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import SaveButton from '../components/SaveButton';

const AccountTypeRow = ({ accountType, onEdit, onDelete }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [editedAccountType, setEditedAccountType] = useState(accountType.name);

  const handleEdit = () => {
    if (isEditMode) {
      onEdit({ ...accountType, name: editedAccountType });
      setEditedAccountType(accountType.name); // Reset the edited value to the original account type name
    }
    setEditMode(!isEditMode);
  };

  const handleDelete = () => {
    onDelete(accountType.id);
  };

  return (
    <tr>
      <td className="border px-4 py-2">
        {isEditMode ? (
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={editedAccountType}
            onChange={(e) => setEditedAccountType(e.target.value)}
          />
        ) : (
          accountType.name
        )}
      </td>
      <td className="border px-4 py-2 flex">
        {isEditMode ? (
          <SaveButton onClick={handleEdit} />
        ) : (
          <EditButton onClick={handleEdit} />
        )}
        <DeleteButton onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default AccountTypeRow;