import React from "react";

const Sheet = ({ children, isOpen, onClose }) => (
  isOpen ? (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-800 p-4" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
);

export default Sheet;
