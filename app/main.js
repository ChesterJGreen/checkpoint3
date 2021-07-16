// import ValuesController from "./Controllers/ValuesController.js";
import ListsController from "./Controllers/ListsController.js";
import TasksController from "./Controllers/TasksController.js"

class App {
  // valuesController = new ValuesController();
  listsController = new ListsController();
  tasksController = new TasksController();
}

window["app"] = new App();
