import React from 'react'

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            task: ''
        }
    }
    submitHandler = e =>{
            e.preventDefault()
            this.props.addTask(this.state.task)
            this.setState({task: ''})

    }
    changeHandler = e =>{
        this.setState({task: e.target.value})

    }

    render(){
        return (
            <form 
            autoComplete="off"
            className="todo-form"
            onSubmit={this.submitHandler}>
                <input 
                placeholder="Add a task"
                type="text" 
                name="task" 
                value={this.state.task}
                onChange={this.changeHandler}
                />
                <button type="submit">Add</button>
                <button onClick={this.props.clearCompleted} type="reset">Clear Completed</button>
            </form>
        )
    }
} 

export default TodoForm