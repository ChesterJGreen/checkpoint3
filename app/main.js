import ListsController from "./Controllers/ListsController.js";


class App {
  listsController = new ListsController();

}

window["app"] = new App();
