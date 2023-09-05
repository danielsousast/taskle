import BottomSheet from '@components/BottomSheet';
import React from 'react';
import {
  Content,
  InputButtonText,
  InputRow,
  ModalTitle,
  SmallInputButton,
} from './styles';
import Input from '@components/Input';
import SelectDateModal from '@components/SelectDateModal';
import {DateData} from 'react-native-calendars';
import Button from '@components/Button';
import TextArea from '@components/TextArea';

interface AddTaskModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddTaskModal = ({isVisible, onClose}: AddTaskModalProps) => {
  const [showDateModal, setShowDateModal] = React.useState(false);
  const [date, setDate] = React.useState('');

  function handleSelectDate(selectedDate: DateData) {
    setDate(selectedDate.dateString);
    setShowDateModal(false);
  }

  return (
    <BottomSheet isVisible={isVisible} onSubmit={() => {}} onClose={onClose}>
      <ModalTitle>Add task</ModalTitle>
      <Content>
        <Input placeholder="Task title" marginBottom={12} />
        <TextArea placeholder="Description" numberOfLines={3} />
        <InputRow>
          <SmallInputButton onPress={() => setShowDateModal(true)}>
            <InputButtonText>{date || '00/00/0000'}</InputButtonText>
          </SmallInputButton>
          <SmallInputButton>
            <InputButtonText>00:00</InputButtonText>
          </SmallInputButton>
        </InputRow>
        <Button title="CONFIRMAR" onPress={() => {}} />
      </Content>
      <SelectDateModal
        isVisible={showDateModal}
        onClose={() => setShowDateModal(false)}
        onSelectDate={handleSelectDate}
      />
    </BottomSheet>
  );
};

export default AddTaskModal;
