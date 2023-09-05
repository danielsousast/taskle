import React from 'react';
import {HomeContainer, HomeContent, HomeTitle, styles} from './styles';
import {FlashList} from '@shopify/flash-list';
import TaskItem from '@components/TaskItem';
import FloatingButton from '@components/FloatingButton';

const data = [
  {
    id: 1,
    description: 'Reunião as 19h',
    completed: false,
  },
  {
    id: 2,
    description: 'Reunião as 10h',
    completed: true,
  },
];

const Home: React.FC = () => {
  const [tasks, setTasks] = React.useState(data);

  function onTaskPress(taskId: number) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function renderItem({item}: any) {
    return <TaskItem task={item as any} onPress={() => onTaskPress(item.id)} />;
  }

  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitle>
          Good morning, <HomeTitle bold>Daniel</HomeTitle>
        </HomeTitle>
        <FlashList
          data={tasks}
          renderItem={renderItem}
          estimatedItemSize={10}
          contentContainerStyle={styles.flashListContentStyle}
        />
      </HomeContent>
      <FloatingButton />
    </HomeContainer>
  );
};

export default Home;
