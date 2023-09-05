import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  bottom: 32px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  ${({theme}) => theme.shadows.shadow07};
`;
