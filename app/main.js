import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  listsController = new ListsController();
  tasksController = new TasksController();
}

window["app"] = new App();
