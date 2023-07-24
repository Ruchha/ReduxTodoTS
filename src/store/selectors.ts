import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";


const getAllTodos = (state:RootState) => state.todos.todos


export const selectSortedAndSearchedTodos = createSelector(
    getAllTodos,
    (_: RootState, filter:{sort:string, query:string}) => filter,
    (todos, filter) => {
        const filteredPosts = todos.filter(todo => todo.body.toLowerCase().includes(filter.query.toLowerCase()))
    if(!filter.sort){
        return filteredPosts;
    }
    else{
        return [...filteredPosts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    }
  );