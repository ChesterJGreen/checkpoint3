import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";

class TasksService {
  addTask() {
    //ProxyState.tasks = [...ProxyState.tasks, new Task({ rawTask })]
  }
}

export const tasksService = new TasksService();