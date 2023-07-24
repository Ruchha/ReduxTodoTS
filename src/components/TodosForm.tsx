import React, { useState } from 'react'
import ITodo from '../model/ITodo'
import { useAppDispatch } from '../hooks/redux'
import { todoAdded } from '../store/reducers/todosSlice'

export default function TodosForm() {
    const dispatch = useAppDispatch()
    const [todo, setTodo] = useState<ITodo>({
        id:null, //put null here since it doesn't have id before creation, and now its id: number | null in interface, probably there should be better approach
        name:"",
        body:"",
        isCompleted:false
    })

    function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        dispatch(todoAdded({...todo, id: Date.now()})) // todo creation, adding random id
        setTodo({...todo, name:"", body:""}) //fields clearing after button press
    }
  return (
    <form>
        <input required value={todo?.name} onChange={e => setTodo({...todo, name: e.target.value})} placeholder='name'/>
        <input required value={todo?.body} onChange={e => setTodo({...todo, body: e.target.value})} placeholder='todo description'/>
        <button onClick={handleSubmit}>Add todo</button>
    </form>
  )
}
