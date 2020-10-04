import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    };

    return (
        <form onSubmit={submit} id="login-form">
            <div className="field-form">
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </div>
        </form>
    );
};