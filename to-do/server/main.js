import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks';
import { LinksCollection } from '../imports/api/links'

const insertTask = taskText => LinksCollection.insert({ text: taskText })

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('meteorite')) {
    Accounts.createUser({
      username: 'meteorite',
      password: 'password'
    });
  }

  if (Tasks.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)

  }
});