import React, { useState } from 'react'
import ITodo from '../model/ITodo'
import { useAppDispatch } from '../hooks/redux'
import { todoAdded } from '../store/reducers/todosSlice'

export default function TodosForm() {
    const dispatch = useAppDispatch()
    const [todo, setTodo] = useState<ITodo>({
        id:null,
        name:"",
        body:"",
        isCompleted:false
    })

    function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        dispatch(todoAdded({...todo, id: Date.now()}))
        setTodo({...todo, name:"", body:""})
    }
  return (
    <form>
        <input required value={todo?.name} onChange={e => setTodo({...todo, name: e.target.value})} placeholder='name'/>
        <input required value={todo?.body} onChange={e => setTodo({...todo, body: e.target.value})} placeholder='todo description'/>
        <button onClick={handleSubmit}>Add todo</button>
    </form>
  )
}
