import React from 'react';
import {TaskItemContainer, TaskItemTitle} from './styles';
import {Task} from '../../../domain/dto/Task';
import Icon from '@components/Icon';
import {useTheme} from 'styled-components/native';

interface TaskItemProps {
  task: Task;
  onPress: () => void;
}

const TaskItem = ({task, onPress}: TaskItemProps) => {
  const {colors} = useTheme();
  return (
    <TaskItemContainer onPress={onPress}>
      <Icon
        name={task?.completed ? 'check-circle' : 'circle'}
        color={colors.primary}
      />
      <TaskItemTitle>{task?.description}</TaskItemTitle>
    </TaskItemContainer>
  );
};

export default TaskItem;
