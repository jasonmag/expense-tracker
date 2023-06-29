import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray py-1 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-6 flex justify-center">
          <p className="text-sm text-gray-800">
            &copy; {new Date().getFullYear()} jasonmag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};