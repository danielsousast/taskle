import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  padding: 24px 24px 48px;
  width: 100%;
`;

export const ModalTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.View`
  padding-bottom: 12px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const SmallInputButton = styled.TouchableOpacity`
  width: 48.5%;
  margin-top: 12px;
  height: 50px;
  border-radius: 4px;
  ${({theme}) => theme.shadows.defaultShadow};
  background-color: ${({theme}) => theme.colors.shape};
  padding: 0 16px;
  justify-content: center;
`;

export const InputButtonText = styled.Text``;
