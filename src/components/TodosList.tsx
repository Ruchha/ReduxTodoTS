import { useMemo, useState } from 'react'
import {useAppSelector } from '../hooks/redux'
import TodosItem from './TodosItem'
import {styled} from 'styled-components'
const Todos = styled.div`

display:flex;
flex-direction: column;
gap:20px;

`

export default function TodosList() {
    const [query, setQuery] = useState("")
    const {todos} = useAppSelector(state => state.todos)
    const searchedTodos = useMemo(() => query ? todos.filter(todo => todo.body.includes(query)) : todos, [query, todos])
  return (
    
    <Todos>
        <input onChange={e => setQuery(e.target.value)} value={query} placeholder="search..."/>
        {searchedTodos.map((todo, index) => 
            <TodosItem key={todo.id} index={index} todo={todo}/>
            )}
    </Todos>
  )
}
