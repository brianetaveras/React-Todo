import React from 'react'
import Item from './Todo'
import TodoForm from './TodoForm'


const toDo = ({tasks, toggleTask, addTask, clearCompleted}) =>{
    return (
        <div className="todo-list">
                    <TodoForm 
                    addTask={addTask}
                    clearCompleted={clearCompleted}/>

            {tasks.map(task=>{
                return <Item toggleTask={toggleTask} task={task} key={task.id}/>
            })}
        </div>
    )
}

export default toDo

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
