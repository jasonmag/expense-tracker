import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, text }) => {
  return (
    <Link to={to} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
      {text}
    </Link>
  );
};

export default ButtonLink;