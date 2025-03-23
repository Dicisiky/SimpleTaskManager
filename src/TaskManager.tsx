import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import ListHeader from "./ListHeader";

interface Task {
  title: string;
  description: string;
}

function TaskManager() {
  const [taskManagerTasks, setTaskManagertasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTaskManagertasks([...taskManagerTasks, task]);
  };

  const removeTask = (index: number) => {
    setTaskManagertasks(taskManagerTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      {taskManagerTasks.length > 0 && <ListHeader />}
      <TaskList listTasks={taskManagerTasks} removeTask={removeTask} />
    </div>
  );
}

export default TaskManager;
