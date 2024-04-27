import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  height: 70%;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TimeButton = styled.TouchableOpacity`
  background-color: #eee;
  padding: 12px 16px;
  border-radius: 8px;
`;
