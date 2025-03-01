import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoMdClose } from "react-icons/io";
import Button from '../Components/Button'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = 'w-full max-w-md mx-auto p-4 sm:p-6',
  footer,
  disableBackdropClick = false,
  ariaLabelledBy = 'modal-title',
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-lg shadow-lg  w-full ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
      >
        {/* Header */}
        <div className="flex items-center justify-between  p-1">
          <h2 id={ariaLabelledBy} className="text-lg font-semibold">
            {title}
          </h2>
          <Button
          variant='secondary'
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
           <IoMdClose />
          </Button>
        </div>

        {/* Body */}
        <div className="max-h-[70vh] overflow-y-auto bg-white text-black ">{children}</div>

        {/* Footer (optional) */}
        {footer && (
          <div className="flex justify-end gap-2  p-4 mt-2">{footer}</div>
        )}

        {/* Backdrop */}
        {!disableBackdropClick && (
          <div
            className="absolute inset-0 z-[-1] "
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.node,
  disableBackdropClick: PropTypes.bool,
  ariaLabelledBy: PropTypes.string,
};

export default Modal;