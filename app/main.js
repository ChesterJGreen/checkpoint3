// import ValuesController from "./Controllers/ValuesController.js";
import ListsController from "./Controllers/ListsController.js";


class App {
  // valuesController = new ValuesController();
  listsController = new ListsController();

}

window["app"] = new App();
