import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { tasksService } from "../Services/TasksService.js";
// import { loadState, saveState } from "../Utils/LocalStorage.js"
// import { modal } from "../Utils/Modal.js"




//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(list => template += list.Template)
  document.getElementById('list').innerHTML = template
}

function _drawTasks() {
  let tasks = ProxyState.lists[tasks]
  tasks.forEach(tasks => template += tasks.Template)
  document.getElementById('tasks').innerHTML = template
}


//Public
export default class listsController {
  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on('tasks', _draw);
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
  }

  removeList(id) {
    listsService.removeList(id)

  }

  removeTask(id) {
    listsService.removeTask(id)
  }

  addTask(listId) {
    debugger
    event.preventDefault()
    let newTask = event.target
    let rawTask = {
      name: newTask.list.tasks[value]
    }
    console.log(rawTask)
    tasksService.addTask(rawTask)
    newTask.reset()
    _drawTasks()
  }

  // addValue() {
  //   valuesService.addValue()
  // }

}
