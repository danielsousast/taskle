import React from 'react';
import * as S from './styles';
import {FloatButton, Text} from '../../components';
import {SectionList, SectionListRenderItemInfo} from 'react-native';
import {TaskItem} from '../../components/TaskItem';
import {ModalTask} from '../../components/ModalTask';

const tasks = [
  {
    id: 1,
    title: 'Buy a bread',
    done: false,
  },
  {
    id: 2,
    title: 'Buy a milk',
    done: false,
  },
  {
    id: 3,
    title: 'Buy a butter',
    done: false,
  },
];

const tasks2 = [
  {
    id: 4,
    title: 'Buy a bread',
    done: false,
  },
  {
    id: 5,
    title: 'Buy a milk',
    done: false,
  },
  {
    id: 6,
    title: 'Buy a butter',
    done: false,
  },
];

const sectionsFake = [
  {
    title: 'Today',
    data: tasks,
  },
  {
    title: 'Tomorrow',
    data: tasks2,
  },
];

export function HomeScreen() {
  const [showModal, setShowModal] = React.useState(false);
  const [sections, setSections] = React.useState(sectionsFake);

  function handlePressTask(taskId: number) {
    const newSections = sections.map(section => ({
      ...section,
      data: section.data.map(task =>
        task.id === taskId ? {...task, done: !task.done} : task,
      ),
    }));

    setSections(newSections);
  }

  function renderItem({
    item,
  }: SectionListRenderItemInfo<{
    id: number;
    title: string;
    done: boolean;
  }>) {
    return (
      <TaskItem
        value={item.done}
        onValueChange={() => handlePressTask(item.id)}
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
          sections={sections}
          renderItem={renderItem}
        />
      </S.Content>
      <FloatButton onPress={() => setShowModal(true)} />
      <ModalTask
        isVisible={showModal}
        onRequestClose={() => setShowModal(false)}
      />
    </S.Container>
  );
}
