import React from "react";

interface Todo {
  name: string;
}

interface Props {
  task: Todo;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.name}</span>
      </div>
      <button onClick={() => completeTask(task.name)}>X</button>
    </div>
  );
};

export default TodoTask;
