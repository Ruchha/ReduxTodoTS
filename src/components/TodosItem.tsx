import ITodo from '../model/ITodo'
import { useAppDispatch } from '../hooks/redux'
import { todoRemoved, todoToggled } from '../store/reducers/todosSlice'
import { styled } from "styled-components"
interface Props{
    todo: ITodo,
    index:number
}
const Todo = styled.div`
  display:flex;
  gap:30px;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: lightgray;
  border-radius: 20px;
`
export default function TodosItem({todo, index}:Props) {
    const dispatch = useAppDispatch()

  return (
    <Todo>
        <h2>{index + 1}</h2>
        <h2>{todo.name}</h2>
        <h2>{todo.body}</h2>
        <h2>{todo.isCompleted ? "Completed" : "In Proccess"}</h2>
        <button onClick={() => dispatch(todoToggled(todo.id!))}>{todo.isCompleted ? "Make incompleted" : "Make completed"}</button>
        <button onClick={() => dispatch(todoRemoved(todo.id!))}>delete</button> {/*todo deletion*/}
    </Todo>
  )
}
