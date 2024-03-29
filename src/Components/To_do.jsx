import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiTick} from 'react-icons/ti';

export default function To_do({todos, completeTask, removeTask}) {
  return todos.map((todo, index) =>(
    <div className= {todo.isComplete ? "complete task-div" : "task-div"} key={index}>
      <div className="todo-text">{todo.text}</div>
        <div className="icons" key={todo.id}>
        <TiTick onClick={()=>{completeTask(todo.id)}}></TiTick>
        <RiCloseCircleLine onClick={()=>{removeTask(todo.id)}}></RiCloseCircleLine>
      </div>
    </div>
  ))
}
