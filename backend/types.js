import {z} from 'zod';

export const createTodoSchema = z.object({
    title : z.string().min(3),
    description : z.string().min(1)
})

export const updateTodoSchema = z.object({
    id : z.string()
})