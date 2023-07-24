import React from 'react'
import IFilter from '../model/IFilter';
import MySelect from './UI/MySelect';

interface Props{
  filter:IFilter
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export default function TodosFilter({filter, setFilter}:Props) {
  return (
    <div>
      <div>
      <button onClick={() => setFilter({...filter, showCompleted: !filter.showCompleted})}>{filter.showCompleted ? "Hide Completed" : "Show completed"}</button>
      <button onClick={() => setFilter({...filter, showIncompleted: !filter.showIncompleted})}>{filter.showIncompleted ? "Hide incompleted" : "Show incompleted"}</button>
    </div>
        <select value={filter.sort} onChange={e => setFilter({...filter, sort: e.target.value })}> 
          <option disabled value="">Сортировать по</option>
          <option value="name">По названию</option>
          <option value="body">По содержимому</option>     {/* hardcode for now, should be separate UI component */} 
          <option value="">Не сортировать</option>
        </select>
        <input onChange={e => setFilter({...filter, query:e.target.value})} value={filter.query} placeholder="search..."/>
      </div>
  )
}
