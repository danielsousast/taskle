import {useEffect, useState} from 'react';

import {commonStorage} from '../../../infra/storage';
import {Task} from '../interfaces';
import {dateUtils} from '../../../common/utils/date';

export interface TaskSection {
  title: string;
  data: Task[];
}

export function useListTasks() {
  const [tasks, setTasks] = useState<TaskSection[]>([]);

  function getTaks() {
    try {
      const storagedTasks = commonStorage.get<Task[]>('tasks');

      if (!storagedTasks) {
        return setTasks([
          {
            title: 'Today',
            data: [],
          },
          {
            title: 'Tomorrow',
            data: [],
          },
        ]);
      }
      let todayTasks = [] as Task[];
      let tomorrowTasks = [] as Task[];

      storagedTasks.map(task => {
        const now = new Date();
        const formatedToday = dateUtils.format(now.toISOString());
        if (task.date === formatedToday) {
          todayTasks.push(task);
        } else {
          tomorrowTasks.push(task);
        }
      });

      const sections = [
        {
          title: 'Today',
          data: todayTasks,
        },
        {
          title: 'Tomorrow',
          data: tomorrowTasks,
        },
      ];

      setTasks(sections);
    } catch (error) {}
  }

  useEffect(() => {
    getTaks();
  }, []);

  return {tasks, getTaks};
}
