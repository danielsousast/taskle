import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
})`
  padding: 20px;
`;

export const Content = styled.View`
  padding-top: 20px;
  border-radius: 16px;
  background-color: #fff;
`;

export const RowButton = styled.TouchableOpacity`
  border-top-width: 1px;
  border-top-color: #ccc;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

interface ButtonProps {
  color?: string;
}

export const Button = styled.TouchableHighlight.attrs({
  underlayColor: '#eee',
})<ButtonProps>`
  padding: 16px;
  border-radius: 16px;
  margin-top: 4px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 48%;
  background-color: ${props => props.color || '#fff'};
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const OptionButton = styled.TouchableOpacity``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 10px;
`;

export const Column = styled.View`
  width: 48%;
`;
