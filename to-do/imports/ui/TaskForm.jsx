import React, { useState } from 'react';
import Tasks from '../api/tasks';

export const TaskForm = ({ user }) => {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!text) return;

        Tasks.insert({
            text: text.trim(),
            createdAt: new Date(),
            owner: user._id,
        });

        setText("");

    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="type new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">add task</button>
        </form>
    );
};
