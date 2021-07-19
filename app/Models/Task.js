import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor({ name, listId, id = generateId(), completed = false }) {
    this.name = name
    this.id = id
    this.completed = completed
    this.listId = listId
  }
  get Template() {
    return `
    <div class="row m-2">
      <div class="col-8 form-check m-2">
        <input class="form-check-input" type="checkbox" value="${this.completed}" id="${this.id}">
        <label class="form-check-label" for="defaultCheck1">${this.name}
        </label>
      </div>
      <div class="col-2 m-2">
        <i class="fas fa-trash" type="submit" title="delete task" onclick="app.listsController.removeTask('${this.listId}', '${this.id}')"></i>
      </div>
    </div>
    `
  }
}