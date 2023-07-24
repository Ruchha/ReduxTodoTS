import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";
import IFilter from "../model/IFilter";
import ITodo from "../model/ITodo";


const getAllTodos = (state:RootState) => state.todos.todos

//Custom selector for searching and sorting, getting query field for search and sort type from filter object, also sorting by tag completed/not completed
export const selectSortedAndSearchedTodos = createSelector(
    getAllTodos,
    (_: RootState, filter:IFilter) => filter,
    (todos, filter) => {
        let filteredTodos = todos.filter(todo => todo.body.toLowerCase().includes(filter.query.toLowerCase()))

        if (!filter.showCompleted) {
            // Filter out completed todos
            filteredTodos = filteredTodos.filter((todo) => !todo.isCompleted);
          }
      
        if (!filter.showIncompleted) {
          // Filter out incompleted todos
          filteredTodos = filteredTodos.filter((todo) => todo.isCompleted);
        }

        if(!filter.sort){
            //if there is no sort selected, simply returning filtered todos
            return filteredTodos;
        }
        else{
            //FIXED: got typescript error here that i can't use string as index for array, so i had to add [key: string]: any; to todo interface
            return [...filteredTodos].sort((a,b) => (a[filter.sort as keyof ITodo] as string).localeCompare(b[filter.sort as keyof ITodo] as string))
        }
    }
  );
export const selectCompletedTasks = createSelector(
    getAllTodos,
    todos => todos.filter(todo => todo.isCompleted)
)
export const selectUncompletedTasks = createSelector(
    getAllTodos,
    todos => todos.filter(todo => !todo.isCompleted)
)
