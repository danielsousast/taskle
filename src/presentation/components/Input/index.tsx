import React from 'react';
import {InputComponent} from './styles';
import {InputBaseProps} from './base';
import {Controller} from 'react-hook-form';

interface Props extends InputBaseProps {
  marginBottom?: number;
  control?: any;
  name?: string;
  defaultValue?: string;
}

const Input = ({marginBottom, control, defaultValue, name, ...rest}: Props) => {
  if (!control) {
    return <InputComponent {...rest} marginBottom={marginBottom} />;
  }

  return (
    <Controller
      render={({field: {onChange, value}}) => (
        <InputComponent {...rest} onChangeText={onChange} value={value} />
      )}
      name={name as string}
      control={control}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
