import React, { useState } from 'react';
const dummyData = {
    email: "one@gmail.com",
    password: "one"
}
const App = () => {
    const [email, setEmail] = useState('')
    const [userError, setUserError] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [login, setLogin] = useState(false)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserError('')
        setError('')
        setLogin(false)
        setTimeout(() => {

            if (email !== dummyData.email) {
                setUserError("User not found")
                return;
            }
            if (password !== dummyData.password) {
                setError("Password Incorrect")
                return;
            }
            setLogin(true)
            console.log(email, password, "Login Successfully")
            setEmail('')
            setPassword('')
            setUserError('')
            setError('')
        }, 3000)
    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        id="input-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
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
                            setPassword(e.target.value);
                        }}
                    />
                    {error && <p id="password-error" style={{ color: "red" }}>{error}</p>}
                </div>

                <button id="submit-form-btn" type="submit" >
                    {login ? "Logging in..." : "Login"}
                </button>
            </form>
        </>
    )
}
export default App;