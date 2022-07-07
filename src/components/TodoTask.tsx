import React from 'react';
import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameTodelete: string): void;
}
const TodoTask = ({task, completeTask}:Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <span>ready in {task.deadline} days</span>
        </div>
        <button onClick={()=> {completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default TodoTask;