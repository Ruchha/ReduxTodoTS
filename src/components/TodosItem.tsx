import ITodo from '../model/ITodo'
import { useAppDispatch } from '../hooks/redux'
import { todoEdited, todoRemoved, todoToggled } from '../store/reducers/todosSlice'
import { styled } from "styled-components"
import { useState } from 'react'
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
    const [isEdit, setEdit] = useState(false)
    const [editedTodo, setEditedTodo] = useState<ITodo>({
      id:null,
      name:todo.name,
      body:todo.body,
      isCompleted:false
    })

    function handleEdit(){
      
      dispatch(todoEdited({...editedTodo, id: todo.id, isCompleted: todo.isCompleted}))
      setEdit(false)
    }

  return (
    <Todo>
      <h2>{index + 1}</h2>
      {isEdit 
      ?
      <>
        <input value={editedTodo.name} onChange={e => setEditedTodo({...editedTodo, name: e.target.value})}/>
        <input value={editedTodo.body} onChange={e => setEditedTodo({...editedTodo, body: e.target.value})}/>
      </>
      :
      <>
      <h2>{todo.name}</h2>
      <h2>{todo.body}</h2>
      
      </>
       }
       <h2>{todo.isCompleted ? "Completed" : "In Proccess"}</h2>
      <button onClick={() => dispatch(todoToggled(todo.id!))}>{todo.isCompleted ? "Make incompleted" : "Make completed"}</button>
      {isEdit && <button onClick={handleEdit}>Confirm</button>}
      <button onClick={() => setEdit(prev => !prev)}>{ isEdit ? "Cancel" : "Edit Todo"}</button>
      <button onClick={() => dispatch(todoRemoved(todo.id!))}>delete</button> {/*todo deletion*/}
       
    </Todo>
  )
}
