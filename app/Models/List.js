import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
// import { modal } from "../Utils/Modal.js"

export default class List {
  constructor({ name, color, id = generateId(), tasks = [] }) {
    this.name = name
    this.color = color
    this.id = id
    this.tasks = tasks


  }
  get tasksTotal() {
    return this.tasks.length
  }

  get tasksPending() {
    let count = 0
    this.tasks.forEach(task => {
      if (task.completed == false) {
        count++
      }

    })
    return count
  }

  get Template() {
    return /*html*/`<div class="list col-md-3 col-sm-5 mx-3">
    <div class="row">
        <div class="col-md-12 col-sm-2 my-3 shadow border card">
            <div class="">
                <div class="row text-center p-3 header" style="background-color: ${this.color}">
                    <!-- NOTE this is the removeLIST() -->
                    <div class="col-12 d-flex justify-content-end"><span title="delete list" class="action"
                            onclick="app.listsController.removeList('${this.id}')">X</span></div>
                    <div class="col-12"><span class=""><b class="text-light text-shadow">${this.name.toUpperCase()}</b></span><br>
                        <span class="text-light text-shadow">${this.tasksPending}/${this.tasksTotal}</span>
                    </div>

                </div>
                <div class="p-3 body">
                    <!-- //NOTE this is the task with the checkbox -->
                    <div class="row m-2" id="tasks">
                        ${this.MyTasks}
                    </div>
                    <!-- //NOTE this is the task creator field -->
                    <div class="div p-3 d-flex">
                        <input type="text" class="form-control" name="tasks" id="${generateId()}"
                            aria-describedby="helpId" placeholder="Task" minlength="3" maxlength="50"
                            required>
                        <button type="submit" class="btn rounded" onclick="app.listsController.addTask()"><b>+</b></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
  }

  get MyTasks() {
    let template = '';
    let tasks = this.tasks
    tasks.forEach(t => {
      template += t.Template

    })
    if (!template) {
      template += "Add a Task"
    }
    return template
  }
}