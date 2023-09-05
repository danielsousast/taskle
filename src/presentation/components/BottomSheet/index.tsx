import React from 'react';
import {ModalContainer, Modal, Separator} from './styles';

interface BottomSheetProps {
  isVisible: boolean;
  onSubmit: () => void;
  onClose: () => void;
  onSwipeComplete?: () => void;
  children: React.ReactNode;
  showSeparator?: boolean;
}

const BottomSheet = ({
  children,
  isVisible,
  onClose,
  onSwipeComplete,
  showSeparator = true,
}: BottomSheetProps) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['down']}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <ModalContainer>
        {showSeparator && <Separator />}

        {children}
      </ModalContainer>
    </Modal>
  );
};

export default BottomSheet;
