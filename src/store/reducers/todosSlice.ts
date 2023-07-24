import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ITodo from "../../model/ITodo";


export interface TodoState {
    todos:ITodo[]
}
//since im not using api, added todos trough hardcode, maybe later I'll do it using createApi
const initialState:TodoState = {
    todos:[{id: 1,name:"name",body:"body",isCompleted:false},
    {id: 2,name:"name2",body:"body2",isCompleted:false}]
}
//simple reducers for adding, deleting, and toggling completed/ not completed todo using createSlice
export const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        todoAdded(state, action: PayloadAction<ITodo>){
            state.todos.push(action.payload)
        },
        todoRemoved(state, action: PayloadAction<number>)
        {
            state.todos = state.todos.filter(todo => action.payload !== todo.id) 
        },
        todoToggled(state, action: PayloadAction<number>){
            const matchingTodo = state.todos.find(todo => todo.id === action.payload)
            if (matchingTodo){
                matchingTodo.isCompleted = !matchingTodo.isCompleted
            }
        }
        
    }
})

export const {todoAdded, todoRemoved, todoToggled} = todosSlice.actions

export default todosSlice.reducer