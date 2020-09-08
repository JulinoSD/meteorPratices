import React, { useState } from 'react';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password)
    };

    return (
        <form onSubmit={submit} className="login-form">
            <label htmlFor="username">username</label>

            <input
                type="text"
                placeholder="username"
                name="username"
                required

                onChange={(e) => setUsername(e.currentTarget.value)}
            />

            <label htmlFor="password">password</label>
            
            <input
                type="password"
                placeholder="password"
                name="password"
                required

                onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <button type="submit">log in</button>
        </form>
    );
};