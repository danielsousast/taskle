import styled from 'styled-components/native';

export const Container = styled.View``;

interface StyledInputProps {
  marginBottom?: number;
}

export const InputComponent = styled.TextInput<StyledInputProps>`
  height: 50px;
  border-radius: 4px;
  width: 100%;
  ${({marginBottom}) => marginBottom && `margin-bottom: ${marginBottom}px`};
  ${({theme}) => theme.shadows.defaultShadow};
  background-color: ${({theme}) => theme.colors.shape};
  padding: 0 16px;
`;
