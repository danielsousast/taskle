export interface Task {
  id: string;
  title: string;
  completed: boolean;
  date: string;
}

export interface AddTaskParams {
  title: string;
  date: string;
  completed: boolean;
}
