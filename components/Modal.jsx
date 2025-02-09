import React, { useEffect } from 'react';

const Modal = ({ isOpen, toggleModal, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`flex bg-stone-200 rounded-3xl p-8 w-[80%] max-w-[800px] min-h-[730px] relative ${className}`}
      >
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 w-8 h-8 pt-2 pr-2"
        >
          <i className="fa-solid fa-xmark text-gray-950 text-2xl"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
