import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email && user.password === password);

        if (existingUser) {
            console.log('User found');
            navigate('/');
        } else {
            console.log('User not found');
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;