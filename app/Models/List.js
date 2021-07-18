import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
// import { modal } from "../Utils/Modal.js"

export default class List {
  constructor({ name, color, tasksTotal = 1, tasksReady, id = generateId() }) {
    this.name = name
    this.color = color
    this.tasksTotal = tasksTotal
    this.tasksReady = tasksReady
    this.id = id


  }
  get Template() {
    return /*html*/`<div class="list col-md-3 col-sm-5 mx-3">
    <div class="row">
        <div class="col-md-12 col-sm-2 my-3 shadow border card">
            <div class="">
                <div class="row text-center bg-new p-3 header ">
                    <!-- NOTE this is the removeLIST() -->
                    <div class="col-12 d-flex justify-content-end"><span title="delete list" type=""
                            onclick="app.listsController.removeList('${this.id}')">X</span></div>
                    <div class="col-12"><span><b>${this.name.toUpperCase()}</b></span><br>
                        <span>${this.tasksReady}/${this.tasksTotal}</span>
                    </div>

                </div>
                <div class="p-3 body">
                    <!-- //NOTE this is the task with the checkbox -->
                    <div class="row m-2" id="tasks">
                        <div class="col-8 form-check m-2">
                            <input class="form-check-input" type="checkbox" value="string" id="task">
                            <label class="form-check-label" for="defaultCheck1">Tasks 1
                            </label>
                        </div>
                        <div class="col-2 m-2">
                            <i class="fas fa-trash" type="" title="delete task" onclick="app.listsServices.removeTask()"></i>
                        </div>
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
    let tasksTotaled = 0;
    let tasks = ProxyState.tasks.filter(tasks => tasks.listId === this.id)
    tasks.forEach(t => {
      template += t.Template
      tasksTotaled += t.tasksTotal
    })
    template += `
    <div class="row m-2">
      <div class="col-8 form-check m-2">
        <input class="form-check-input" type="checkbox" value="string" id="${this.id}">
        <label class="form-check-label" for="defaultCheck1">
          ${this.name}
        </label>
        </div>
      <div class="col-2 m-2">
        <i class="fas fa-trash" type="submit" onclick="removeTask(${this.id})"></i>
      </div>
    </div>
    `
    if (!template) {
      template += "No Tasks"
    }
    return template
  }
}