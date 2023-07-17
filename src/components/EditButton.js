import React from 'react';
import { PencilIcon } from "@heroicons/react/24/outline";

const EditButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      <PencilIcon className="w-4 h-4 mr-2" />
      Edit
    </button>
  );
};

export default EditButton;