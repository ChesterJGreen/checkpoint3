import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
// import { loadState, saveState } from "../Utils/LocalStorage.js"
// import { modal } from "../Utils/Modal.js"




//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(list => template += list.Template)
  document.getElementById('list').innerHTML = template

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

  addTask(listId) {

    event.preventDefault()
    let newTask = event.target
    let rawTask = {
      listId: newTask.listId.value,
      name: newTask.task.value
    }
    console.log(rawTask)
    listsService.addTask(rawTask)
    newTask.reset()
  }

  // addValue() {
  //   valuesService.addValue()
  // }

}
