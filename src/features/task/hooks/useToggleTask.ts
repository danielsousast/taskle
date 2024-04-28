import {taskServices} from '../services';

interface Options {
  onSucess?: () => void;
}

export function useToggleTask({onSucess}: Options) {
  async function toggleTask(taskId: string) {
    const storagedTasks = await taskServices.list();
    const updatedTasks = storagedTasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    taskServices.udapteAll(updatedTasks);
    onSucess && onSucess();
  }

  return {toggleTask};
}
