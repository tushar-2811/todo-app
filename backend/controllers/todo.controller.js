import {z} from 'zod';
import { createTodoSchema, updateTodoSchema } from '../types';
import { Todo } from '../models/todo.model';

export const addNewTodoController = async (req , res) => {
    try {
        const {title , description} = req.body;
        const parsedData = createTodoSchema.safeParse({
            title , description
        });

        if(!parsedData.success){
            return res.status(411).json({
                ok : false,
                message : "Invalid Input Data"
            })
        }

        const newTodo = await Todo.create({
            title : title,
            description : description
        })

        return res.status(201).json({
            ok : true,
            message : "new Todo created",
            data : newTodo
        })

        // put in mongodb
    } catch (error) {
        console.log("server error" , error);
        return res.status(500).json({
            ok : false,
            error : error
        })
    }
}


export const markCompleteATodo = async(req , res) => {
    try {
        const {id} = req.body;
        const parsedData = updateTodoSchema.safeParse({id});

        if(!parsedData.success){
            return res.status(411).json({
                ok : false,
                message : "Invalid Input Data"
            })
        }

        const myTodo = await Todo.findByIdAndUpdate(id , {
            isCompleted : true
        }, {new : true})

        // just mark it complete in database

        return res.status(201).json({
            ok : true,
            message : "updated todo",
            data : myTodo
        })
    } catch (error) {
        console.log("server error" , error);
        return res.status(500).json({
            ok : false,
            error : error
        })
    }
}

export const getAllTodo = async(req , res) => {
    try {
        const allTodos = await Todo.find({});

        return res.status(201).json({
            ok : true,
            message : "all todos found",
            data : allTodos
        })
    } catch (error) {
        console.log("server error" , error);
        return res.status(500).json({
            ok : false,
            error : error
        })
    }
}