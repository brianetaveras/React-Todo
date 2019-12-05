import React from 'react'
import Item from './Todo'

const toDo = ({tasks}) =>{

    return (
        <div>
            {tasks.map(task=>{
                return <Item task={task} key={task.id}/>
            })}
        </div>
    )
}

export default toDo

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
