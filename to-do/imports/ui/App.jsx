import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';
import { Task } from './Task';
import Tasks from '/imports/api/tasks';
import { TaskForm } from './TaskForm';
import { LoginForm } from './LoginForm'

const toggleChecked = ({ _id, isChecked }) => {
  Tasks.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
};

const deleteTask = ({ _id }) => Tasks.remove(_id);

export const App = () => {
  const filter = {};

  const [hideCompleted, setHideCompleted] = useState(false);
  if (hideCompleted) {
    _.set(filter, 'checked', false);
  }

  const { tasks, incompleteTasksCount, user } = useTracker(() => ({
    tasks: Tasks.find(filter, { sort: { createdAt: -1 } }).fetch(),
    incompleteTasksCount: Tasks.find({ checked: { $ne: true } }).count(),
    user: Meteor.user(),
  }));
  if (!user) {
    return (
      <div className="to-do">
        <LoginForm/>
      </div>
    );
  }

  // const tasker = useTracker(() => Tasks.find(filter, { sort: { createdAt: -1 } }).fetch());

  return (
    <div className="to-do">
      <h1>To-do List ({incompleteTasksCount})</h1>

      <div className="filters">
        <label>
          <input
            type="checkbox"
            readOnly
            checked={Boolean(hideCompleted)}
            onClick={() => setHideCompleted(!hideCompleted)}
          />
            Hide Completed
        </label>
      </div>

      <ul className="tasks">
        {tasks.map(task => <Task
          key={task._id}
          task={task}
          nCheckboxClick={toggleChecked}
          onDeleteClick={deleteTask}
        />)}
      </ul>

      <TaskForm user={user}/>
    </div>
  );
};
