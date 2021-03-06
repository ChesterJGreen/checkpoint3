import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";

export function saveState() {
  localStorage.setItem('TaskMasterManager', JSON.stringify({
    lists: ProxyState.lists,
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TaskMasterManager'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.lists.map(l => {
      let tasks = l.tasks.map(t => new Task(t));
      let newList = new List(l);
      newList.tasks = tasks;
      return newList;
    })
  }

}