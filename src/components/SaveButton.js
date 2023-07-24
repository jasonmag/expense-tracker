import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const SaveButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 mr-2 rounded"
      onClick={onClick}
    >
      <CheckIcon className="w-4 h-4 mr-2" />
      Save
    </button>
  );
};

export default SaveButton;
