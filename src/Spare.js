import React, { Component } from "react";
import "./App.1.css";


class Spare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          completedTasks: [],
          draggedTask: {}
        }
      }
      onDrag = (event, todo) => {
        event.preventDefault();
        this.setState({
          draggedTask: todo
        });
      }
    
      onDragOver = (event) => {
        event.preventDefault();
      }
    
      onDrop = (event ) => {
        const { completedTasks, draggedTask, todos } = this.state;
        this.setState({
          completedTasks: [...completedTasks, draggedTask],
          todos: todos.filter(task => task.taskID !== draggedTask.taskID),
          draggedTask: {},
        })
      }
    render() {
        const { todos, completedTasks} = this.state;

        return (
            <div>
                <div
                    onDrop={event => this.onDrop(event)}
                    onDragOver={(event => this.onDragOver(event))}
                    className="done"
                >
                    {completedTasks.map((task, index) =>
                        <div
                            key={task.taskID}
                        >
                            {task.task}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default Spare;