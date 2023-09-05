import ReactNativeModal from 'react-native-modal';
import styled from 'styled-components/native';

export const Modal = styled(ReactNativeModal)`
  justify-content: flex-end;
  margin: 0;
`;

export const ModalContainer = styled.View`
  width: 100%;
  min-height: 100px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  align-items: center;
  padding-top: 28px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Separator = styled.View`
  background: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  height: 4px;
  opacity: 0.9;
  width: 40px;
  margin-bottom: 24px;
`;
