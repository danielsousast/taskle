import React from 'react';
import * as S from './styles';
import {FloatButton, Text} from '@/components';
import {SectionList, SectionListRenderItemInfo} from 'react-native';
import {TaskItem} from '@/components/TaskItem';
import {ModalTask} from '@/components/ModalTask';
import {
  useDeleteTask,
  useToggleTask,
  useListTasks,
  Task,
} from '@/features/task';

export function HomeScreen() {
  const {tasks, getTaks} = useListTasks();
  const {deleteTask} = useDeleteTask({
    onSucess: getTaks,
  });

  const {toggleTask} = useToggleTask({
    onSucess: getTaks,
  });
  const [showModal, setShowModal] = React.useState(false);

  function renderItem({item}: SectionListRenderItemInfo<Task>) {
    return (
      <TaskItem
        onDeletePress={() => deleteTask(item.id)}
        value={item.completed}
        onValueChange={() => toggleTask(item.id)}
        item={item}
      />
    );
  }

  return (
    <S.Container>
      <S.Content>
        <SectionList
          renderSectionHeader={({section: {title}}) => (
            <S.SectionHeaderWrapper>
              <Text fontSize={26} bold>
                {title}
              </Text>
            </S.SectionHeaderWrapper>
          )}
          sections={tasks}
          renderItem={renderItem}
        />
      </S.Content>
      <FloatButton onPress={() => setShowModal(true)} />
      <ModalTask
        isVisible={showModal}
        onSubmitted={getTaks}
        onRequestClose={() => setShowModal(false)}
      />
    </S.Container>
  );
}
