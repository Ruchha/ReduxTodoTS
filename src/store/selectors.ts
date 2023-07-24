import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";


const getAllTodos = (state:RootState) => state.todos.todos

//Custom selector for searching and sorting, getting query field for search and sort type from filter object
export const selectSortedAndSearchedTodos = createSelector(
    getAllTodos,
    (_: RootState, filter:{sort:string, query:string}) => filter,
    (todos, filter) => {
        const filteredPosts = todos.filter(todo => todo.body.toLowerCase().includes(filter.query.toLowerCase()))
    if(!filter.sort){
        //if there is no sort selected, simply returning filtered todos
        return filteredPosts;
    }
    else{
        //got typescript error here that i can't use string as index for array, so i had to add [key: string]: any; to todo interface
        return [...filteredPosts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    }
  );
