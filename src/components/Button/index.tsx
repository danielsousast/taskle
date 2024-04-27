import React from 'react';

import styled from 'styled-components/native';
import {Text} from '../Text';

export const Touch = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
`;

interface Props {
  onPress: () => void;
}

export function Button({onPress}: Props) {
  return (
    <Touch onPress={onPress}>
      <Text colorStyle="white" fontSize={22}>
        Done
      </Text>
    </Touch>
  );
}
