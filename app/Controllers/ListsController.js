import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
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
    // ProxyState.on("value", _draw);
    _draw()
  }

  // addValue() {
  //   valuesService.addValue()
  // }

}
