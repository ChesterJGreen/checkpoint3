import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";

class TasksService {
  addTask() {
    ProxyState.task = [...ProxyState.tasks, new Task({ title: Math.random() })]
  }
}

export const tasksService = new TasksService();