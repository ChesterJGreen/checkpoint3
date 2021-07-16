import { ProxyState } from "../AppState.js";
import TasksController from "../Controllers/TasksController.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


class ListsService {

  createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }

  destroy(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    console.log(id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }

  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
}

export const listsService = new ListsService()