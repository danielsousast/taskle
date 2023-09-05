import React from 'react';
import {ButtonContainer} from './styles';
import Icon from '@components/Icon';
import {useTheme} from 'styled-components/native';
import AddTaskModal from '@components/AddTaskModal';

const FloatingButton: React.FC = () => {
  const {colors} = useTheme();
  const [showModal, setShowModal] = React.useState(false);

  function onButtonPress() {
    setShowModal(true);
  }

  function handleColeModal() {
    setShowModal(false);
  }

  return (
    <ButtonContainer onPress={onButtonPress}>
      <Icon name="plus" size={25} color={colors.shape} />
      <AddTaskModal isVisible={showModal} onClose={handleColeModal} />
    </ButtonContainer>
  );
};

export default FloatingButton;
