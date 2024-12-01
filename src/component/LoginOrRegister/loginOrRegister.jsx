import { auth, googleProvider, signInWithPopup } from '../../config/firebase';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import './login.css';

const LoginOrRegister = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const avatarUrl = user.photoURL || 'https://fastly.picsum.photos/id/726/200/200.jpg';
            sessionStorage.setItem('crypto-avatarurl', avatarUrl);
            sessionStorage.setItem('user-id', user.uid);
            sessionStorage.setItem('user-name', user.displayName);
            setTimeout(() => navigate('/home'), 100);
        } catch (error) {
            setErrorMessage('Login failed. Please try again.');
            console.error('Error logging in:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const avatarUrl = user.photoURL || 'https://fastly.picsum.photos/id/726/200/200.jpg';
                sessionStorage.setItem('crypto-avatarurl', avatarUrl);
                sessionStorage.setItem('user-id', user.uid);
                sessionStorage.setItem('user-name', user.displayName);
                navigate('/home');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    return (
        <div className="login-container">

            <div className="login-card">
                <h1 className="login-title">Welcome to Crypto Tracker</h1>
                <p className="login-subtitle">Sign in to start tracking your portfolio</p>
                <button className="gsi-material-button" onClick={handleLogin}>

                    <span>Sign in with Google</span>
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default LoginOrRegister;
