import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { tasksService } from "../Services/TasksService.js";
// import { loadState, saveState } from "../Utils/LocalStorage.js"
import { modal } from "../Utils/Modal.js"




//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(list => template += list.Template)
  document.getElementById('list').innerHTML = template
}

// function _drawTask() {
//   let tasks = ProxyState.lists[tasks]
//   tasks.forEach(tasks => template += tasks.Template)
//   document.getElementById('tasks').innerHTML = template
// }


//Public
export default class listsController {
  constructor() {
    ProxyState.on("lists", _draw);
    // ProxyState.on("tasks", _drawTask);
    // ProxyState.on('lists', saveState);
    // ProxyState.on('tasks', saveState);
    // loadState()
    _draw()
  }

  createList() {

    event.preventDefault()
    let newList = event.target
    let rawList = {
      name: newList.name.value,
      color: newList.color.value,

    }

    listsService.createList(rawList)
    newList.reset()
    // saveState()
  }

  removeList(id) {
    listsService.removeList(id)
    // saveState()
  }

  changeTaskStatus(listId, taskId) {
    event.preventDefault()

    debugger
    let checked = event.target.checked
    listsService.changeTaskStatus(listId, taskId, checked)
    // saveState()
  }
  removeTask(listId, id) {
    debugger
    listsService.removeTask(listId, id)
    // saveState()
  }

  addTask(listId) {
    event.preventDefault()

    let form = event.target
    let rawTask = {
      name: form.newTask.value,
      listId: listId
    }

    listsService.addTask(rawTask, listId)
    form.reset()
    _draw()
    // saveState()
    // newTask.reset()
    // _drawTask()
  }

  // task status change
  // the checkbox needs to have an onchange status that calls the function in here. 
  // pass in the listId and the taskId
  //go through same things for filter remove 
  //change it and put 

}
