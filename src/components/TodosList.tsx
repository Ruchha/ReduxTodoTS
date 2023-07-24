import { useMemo, useState } from 'react'
import {useAppSelector } from '../hooks/redux'
import TodosItem from './TodosItem'
import {styled} from 'styled-components'
import { selectSortedAndSearchedTodos } from '../store/selectors'
import TodosFilter from './TodosFilter'
import IFilter from '../model/IFilter'

const Todos = styled.div`
display:flex;
flex-direction: column;
gap:20px;
`

export default function TodosList() {
    const [filter, setFilter] = useState<IFilter>({sort:"", query:"", showCompleted: true, showIncompleted:true})
    const sortedAndSearchedTodos = useAppSelector(state => selectSortedAndSearchedTodos(state, filter))
    return (
      <Todos>
        <TodosFilter filter={filter} setFilter={setFilter}/>
          {sortedAndSearchedTodos.map((todo, index) => 
              <TodosItem key={todo.id} index={index} todo={todo}/>
              )}
      </Todos>
  )
}
