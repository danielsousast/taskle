import {useState} from 'react';
import {taskServices} from '../services';
import {dateUtils} from '../../../common/utils/date';

interface Options {
  onSucess?: () => void;
}

export function useAddTask({onSucess}: Options) {
  const [isLoading, setIsLoading] = useState(false);

  function getDate(today: boolean): string {
    if (today) {
      const now = new Date();
      const formattedDate = dateUtils.format(now.toISOString());
      return formattedDate;
    } else {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const formattedDate = dateUtils.format(tomorrow.toISOString());
      return formattedDate;
    }
  }

  async function addTask({title, today}: {title: string; today: boolean}) {
    setIsLoading(true);
    try {
      const date = getDate(today);
      await taskServices.add({title, completed: false, date});
      onSucess && onSucess();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    addTask,
  };
}
