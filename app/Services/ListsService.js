// import { Modal } from "bootstrap";
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";
// import { modal } from "../Utils/Modal.js";


class ListsService {

  createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }
  addTask(rawTask, id) {
    let modListArray = ProxyState.lists.filter(list => list.id == id)
    let modList = modListArray[0]
    modList.tasks = [...modList.tasks, new Task(rawTask)]
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.lists = [...ProxyState.lists, modList]

    // for (let i = 0; i < ProxyState.lists.length; i++) {
    //   if (ProxyState.lists[i].id == id) {
    //     ProxyState.lists[i].tasks.push(new Task(rawTask))
    //     return;
    //   }
    // }
    // 
  }



  removeList(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
      //ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.listId != id)
    }
  }
  removeTask(listId, taskId) {
    if (window.confirm('Are you sure you want to delete this task?')) {
      let modListArray = ProxyState.lists.filter(list => list.id == listId)
      let modList = modListArray[0]
      modList.tasks = modList.tasks.filter(t => t.id != taskId)
      ProxyState.lists = ProxyState.lists.filter(list => list.id != listId)
      ProxyState.lists = [...ProxyState.lists, modList]

    }
  }
  changeTaskStatus(listId, taskId, checked) {
    let modListArray = ProxyState.lists.filter(list => list.id == listId)
    let modList = modListArray[0]
    let modTaskArray = modList.tasks.filter(task => task.id == taskId)
    let modTask = modTaskArray[0]
    modTask.completed = checked
    modList.tasks = modList.tasks.filter(task => task.id != taskId)
    modList.tasks = [...modList.tasks, modTask]
    ProxyState.lists = ProxyState.lists.filter(list => list.id != listId)
    ProxyState.lists = [...ProxyState.lists, modList]
  }

}










// removeTask(id) {
//   ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
// }





export const listsService = new ListsService()