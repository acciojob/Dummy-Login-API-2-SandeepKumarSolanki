import React, { useState } from 'react';

const dummyData = {
  email: "one@gmail.com",
  password: "one"
};

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // clear old errors
    setUserError("");
    setPasswordError("");
    setIsLoading(true);

    setTimeout(() => {
      // simulate async validation
      setIsLoading(false);

      if (email !== dummyData.email) {
        setUserError("User not found");
        setPasswordError(""); // make sure password error is cleared
        return;
      }

      if (password !== dummyData.password) {
        setUserError(""); // clear user error
        setPasswordError("Password Incorrect");
        return;
      }

      // ✅ success: clear all errors first
      setUserError("");
      setPasswordError("");

      // ✅ Optional: wait a tick to allow DOM to update (for Cypress)
      setTimeout(() => {
        alert("Login successful!");
        setEmail("");
        setPassword("");
      }, 0);
    }, 3000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setUserError(""); // clear errors on change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // clear errors on change
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          id="input-email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {/* Always render for Cypress */}
        <h1 id="user-error" style={{ color: 'red' }}>{userError}</h1>
      </div>

      <div>
        <label>Password:</label>
        <input
          id="input-password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* Always render for Cypress */}
        <h1 id="password-error" style={{ color: 'red' }}>{passwordError}</h1>
      </div>

      <button id="submit-form-btn" type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default App;
