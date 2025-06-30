import React, { useState } from 'react';
const dummyData = {
    email: "one@gmail.com",
    password: "one"
}
const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserError("");
        setPasswordError("");
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);

            // Check user email
            if (email !== dummyData.email) {
                setUserError("User not found");
                return;
            }

            // Check password
            if (password !== dummyData.password) {
                setPasswordError("Password Incorrect");
                return;
            }

            // On successful login
            alert("Login successful!");
            setEmail("");
            setPassword("");
        }, 3000);
    };

    const handleInputChange = () => {
        setUserError("");
        setPasswordError("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    id="input-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        handleInputChange();
                        setEmail(e.target.value);
                    }}
                />
                {userError && <p id="user-error" style={{ color: "red" }}>{userError}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input
                    id="input-password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        handleInputChange();
                        setPassword(e.target.value);
                    }}
                />
                {passwordError && <p id="password-error" style={{ color: "red" }}>{passwordError}</p>}
            </div>

            <button id="submit-form-btn" type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};
export default App;