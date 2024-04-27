import styled from 'styled-components/native';

export const TaskWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 12px 0;
`;

export const CheckWrapper = styled.View`
  width: 26px;
  height: 26px;
  margin-right: 8px;
  padding: 2px;
`;

export const TaskText = styled.Text<{selected?: boolean}>`
  color: ${props => (props.selected ? '#888' : '#000')};
  text-decoration-line: ${props => (props.selected ? 'line-through' : 'none')};
  font-size: 16px;
  flex: 1;
`;
