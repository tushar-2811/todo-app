import { Router } from "express";
import { addNewTodoController, getAllTodo, markCompleteATodo } from "../../../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.route('/add-todo').post(addNewTodoController);
todoRouter.route('/delete-todo').delete();
todoRouter.route('/get-todos').get(getAllTodo);
todoRouter.route('/update-todo').put(markCompleteATodo);

export default todoRouter;