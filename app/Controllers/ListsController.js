import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
// import { loadState, saveState } from "../Utils/LocalStorage.js"




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
    _draw()
  }

  createList() {
    event.preventDefault()
    let form = event.target
    let rawList = {
      name: form.name.value,
      color: form.color.value,

    }

    listsService.createList(rawList)
    form.reset()
  }

  destroy(id) {
    listsService.destroy(id)


  }

  // addValue() {
  //   valuesService.addValue()
  // }

}
