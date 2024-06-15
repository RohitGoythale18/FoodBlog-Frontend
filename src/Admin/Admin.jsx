import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import './Admin.css';
import Dashboard from './Dashboard/Dashboard';

export default function Admin() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const handleLogin = (data) => {
        const { username, password } = data;
        if (username === 'admin' && password === 'admin123') {
            alert('Login successful!');
            setLoggedIn(true);
            navigate('/dashboard');
        } 
        else {
            setLoginError('Login failed. Please check your credentials.');
        }
    };

    const onSubmit = (data) => {
        handleLogin(data);
    };

    return (
        <>
            <section className="login-container">
                <form className="admin-login" onSubmit={handleSubmit(onSubmit)}>
                    <img src="./OIG.png" id='admin-logo' alt="" />
                    <h2>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="error-message">{errors.username.message}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                    {loginError && <p className="error-message">{loginError}</p>}
                    <button type="submit">
                        Login
                    </button>
                    <div className="flex flex-col">
                        <NavLink to='/' className="reset-pass-link">Forgot password?</NavLink>
                        <NavLink to='/' className="reset-pass-link">Back</NavLink>
                    </div>
                </form>
            </section>
            {isLoggedIn && <Dashboard />}
        </>
    );
}
