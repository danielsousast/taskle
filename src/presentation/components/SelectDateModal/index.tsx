import BottomSheet from '@components/BottomSheet';
import React from 'react';
import {CloseButton, Content, ModalTitle} from './styles';
import {Calendar, DateData} from 'react-native-calendars';
import Icon from '@components/Icon';
import './config';

interface SelectDateModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectDate: (date: DateData) => void;
}

const SelectDateModal = ({
  isVisible,
  onClose,
  onSelectDate,
}: SelectDateModalProps) => {
  return (
    <BottomSheet
      isVisible={isVisible}
      showSeparator={false}
      onSubmit={() => {}}
      onClose={onClose}
      onSwipeComplete={onClose}>
      <ModalTitle>Select Date</ModalTitle>
      <CloseButton onPress={onClose}>
        <Icon name="x" size={22} color="#000" />
      </CloseButton>
      <Content>
        <Calendar onDayPress={onSelectDate} />
      </Content>
    </BottomSheet>
  );
};

export default SelectDateModal;
