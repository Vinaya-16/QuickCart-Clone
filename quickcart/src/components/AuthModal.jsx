import React, { useState } from 'react';

function AuthModal({ closeModal, onLogin }) {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the values from the actual input fields
    const formData = new FormData(e.target);
    const name = formData.get('fullName');
    const email = formData.get('email');

    onLogin({ name, email }); // This sends the REAL data to App.jsx
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      {/* stopPropagation prevents the modal from closing when clicking inside the white box */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={closeModal}>&times;</button>

        <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>

        <form className="auth-form" onSubmit={(e) => {
          e.preventDefault();
          onLogin({ name: 'Mithila Kadam' });
        }}>
          {isSignUp && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="mithila@example.com" required />
          <input type="password" placeholder="••••••••••••" required />

          <button type="submit" className="auth-submit-btn">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <p className="auth-switch">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Sign In' : 'Create Account'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;