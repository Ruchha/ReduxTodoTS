import { useMemo, useState } from 'react'
import {useAppSelector } from '../hooks/redux'
import TodosItem from './TodosItem'
import {styled} from 'styled-components'
import { selectSortedAndSearchedTodos } from '../store/selectors'

const Todos = styled.div`
display:flex;
flex-direction: column;
gap:20px;
`

export default function TodosList() {
    const [filter, setFilter] = useState({sort:"", query:""})
    const sortedAndSearchedTodos = useAppSelector(state => selectSortedAndSearchedTodos(state, filter))
    return (
    
      <Todos>
        <select value={filter.sort} onChange={e => setFilter({...filter, sort: e.target.value })}> 
          <option disabled value="">Сортировать по</option>
          <option value="name">По названию</option>
          <option value="body">По телу</option>     {/* hardcode for now, should be separate UI component */} 
          <option value="">Не сортировать</option>

        </select>
          <input onChange={e => setFilter({...filter, query:e.target.value})} value={filter.query} placeholder="search..."/>
          {sortedAndSearchedTodos.map((todo, index) => 
              <TodosItem key={todo.id} index={index} todo={todo}/>
              )}
      </Todos>
  )
}
