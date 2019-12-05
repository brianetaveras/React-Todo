import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import tasks from './data'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: tasks
    }

  }

  addTask = task =>{
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }

  toggleTask = taskId =>{
    this.setState({
      tasks: this.state.tasks.map(task=>{
        if (taskId === task.id){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
