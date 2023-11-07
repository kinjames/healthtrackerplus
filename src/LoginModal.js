import React from "react";

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        {/* Login form and sign up link */}
      </div>
    </div>
  );
};

export default LoginModal;
