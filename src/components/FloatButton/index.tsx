import React from 'react';

import styled from 'styled-components/native';
import {Text} from '../Text';

export const Touch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  right: 20px;
  bottom: 32px;
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  padding-left: 1px;
  padding-bottom: 3px;
`;

interface Props {
  onPress: () => void;
}

export function FloatButton({onPress}: Props) {
  return (
    <Touch onPress={onPress}>
      <Text colorStyle="white" fontSize={35}>
        +
      </Text>
    </Touch>
  );
}
