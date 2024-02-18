// Form.js
import React, { useState } from 'react';
import { useNavigate } from'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password
        };

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/login")

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Form;
