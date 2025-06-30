import React, { useState } from 'react';
const dummyData = {
    email: "one@gmail.com",
    password: "one"
}
const App = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [login , setLogin] = useState(false)
    const handleSubmit = (e) => {
        setTimeout(() => {
            e.preventDefault();
            if (email.trim() && email !== dummyData.email) {
                setEmailError("User not found")
                return;
            }
            if (password !== dummyData.password) {
                setPasswordError("Password Incorrect")
                return;
            }
            setLogin(true)
            console.log(email, password , "Login Successfully")
            setEmail('')
            setPassword('')
            setEmailError('')
            setPasswordError('')
        },3000)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Enter you email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="input-email"
                />
                <input
                    type="password"
                    value={password}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    id="input-password"
                />
                <button type='submit' id="submit-from-btn">Submit</button>
            </form>

            {
                emailError.length > 0 && (
                    <p id="email-error">{emailError}</p>
                )
            }
            {
                passwordError.length > 0 && (
                    <p id="password-error">{passwordError}</p>
                )
            }
            {login && (
                <p id="login">Login successfully</p>
            )}

        </>
    )
}
export default App;