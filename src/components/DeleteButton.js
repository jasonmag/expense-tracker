import React from 'react';
import { TrashIcon } from "@heroicons/react/24/outline";

const DeleteButton = ({ onClick, text }) => {
  return (
    <button
      className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mr-2 rounded"
      onClick={onClick}
    >
      <TrashIcon className="w-4 h-4" />
      {text}
    </button>
  );
};

export default DeleteButton;