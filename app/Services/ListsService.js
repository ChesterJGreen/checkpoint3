// import { Modal } from "bootstrap";
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";
// import { modal } from "../Utils/Modal.js";


class ListsService {

  createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }
  addTask(rawTask) {
    ProxyState.lists.tasks = [...ProxyState.lists.tasks, new Task(rawTask)]
  }
  removeList(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
      //ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.listId != id)
    }
  }
  removeTask(id) {
    if (window.confirm('Are you sure you want to delete this task?')) {
      ProxyState.lists.tasks = ProxyState.lists.tasks.filter(tasks => tasks.id != id)
    }
  }
}











// removeTask(id) {
//   ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
// }





export const listsService = new ListsService()