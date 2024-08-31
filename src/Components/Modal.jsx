import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto z-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-neutral-800 rounded-lg shadow-md p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="flex justify-end">
            <button
              className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;