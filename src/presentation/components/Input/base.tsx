import React from 'react';
import {InputComponent} from './styles';
import {TextInputProps} from 'react-native';

export interface InputBaseProps extends TextInputProps {
  marginBottom?: number;
}

const InputBase = ({marginBottom, ...rest}: InputBaseProps) => {
  return <InputComponent {...rest} marginBottom={marginBottom} />;
};

export default InputBase;
