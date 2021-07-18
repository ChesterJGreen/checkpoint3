// import { Modal } from "bootstrap";
import { ProxyState } from "../AppState.js";
import TasksController from "../Controllers/TasksController.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";
// import { modal } from "../Utils/Modal.js";


class ListsService {

  createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }
  removeList(id) {
    window.confirm('Are you sure you want to delete?')
    if (confirm) {
      ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.listId != id)
    }
  }
}









// removeTask(id) {
//   ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
// }





export const listsService = new ListsService()