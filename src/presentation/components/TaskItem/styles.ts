import styled from 'styled-components/native';

export const TaskItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.shape};
  ${({theme}) => theme.shadows.defaultShadow};
`;

export const TaskItemTitle = styled.Text`
  margin-left: 12px;
`;
