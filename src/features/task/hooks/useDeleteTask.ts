import {taskServices} from '../services';

export function useDeleteTask({onSucess}: {onSucess: () => void}) {
  async function deleteTask(taskId: string) {
    await taskServices.remove(taskId);
    onSucess();
  }

  return {
    deleteTask,
  };
}
