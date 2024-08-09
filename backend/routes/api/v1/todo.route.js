import { Router } from "express";
import { addNewTodoController, markCompleteATodo } from "../../../controllers/todo.controller";

const todoRouter = Router();

todoRouter.route('/add-todo').post(addNewTodoController);
todoRouter.route('/delete-todo').delete();
todoRouter.route('/get-todos').get();
todoRouter.route('/update-todo').put(markCompleteATodo);

export default todoRouter;