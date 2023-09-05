import React from 'react';
import {ButtonContainer, ButtonText} from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
