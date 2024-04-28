import {commonStorage} from '../../infra/storage';
import {AddTaskParams, Task} from './interfaces';

async function add(task: AddTaskParams) {
  const tasks = commonStorage.get<Task[]>('tasks');
  const id = `${task.title}${Date.now().toString()}`;
  const newTask = {...task, id};
  commonStorage.set('tasks', [...tasks, newTask]);
}

async function list() {
  return commonStorage.get<Task[]>('tasks');
}

async function udapteAll(tasks: Task[]) {
  return commonStorage.set('tasks', tasks);
}

export const taskServices = {
  add,
  list,
  udapteAll,
};
