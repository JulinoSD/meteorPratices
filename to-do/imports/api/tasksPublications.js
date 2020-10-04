import { Meteor } from 'meteor/meteor'
import { TasksCollection } from '../db/TasksCollection'

Meteor.publish('tasks', function publishTask() {
    return TasksCollection.find({ userId: this.userId })
})