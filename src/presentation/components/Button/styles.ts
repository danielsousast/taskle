import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.shape};
`;
