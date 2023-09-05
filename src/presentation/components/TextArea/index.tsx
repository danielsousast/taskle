import * as React from 'react';

//@ Local Imports
import TextInputBase, {IRNTextAreaProps} from './base';
import {Controller} from 'react-hook-form';

export interface Props extends IRNTextAreaProps {
  name?: string;
  control?: any;
  defaultValue?: string;
}

const TextArea: React.FC<Props> = ({name, control, defaultValue, ...rest}) => {
  if (!control) {
    return <TextInputBase {...rest} multiline={true} />;
  }
  return (
    <Controller
      render={({field: {onChange, value}}) => (
        <TextInputBase
          {...rest}
          onChangeText={onChange}
          value={value}
          multiline={true}
        />
      )}
      name={name as string}
      control={control}
      defaultValue={defaultValue}
    />
  );
};

export default TextArea;
