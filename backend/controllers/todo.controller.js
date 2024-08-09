import {z} from 'zod';
import { createTodoSchema, updateTodoSchema } from '../types';

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

        // put in mongodb
    } catch (error) {
        
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

        // just mark it complete in database
    } catch (error) {
        
    }
}