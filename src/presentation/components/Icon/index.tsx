/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {IconNames} from './types';

Feather.loadFont();

interface IconProps {
  name: IconNames;
  size?: number;
  color?: string;
}

const FeatherIcons = ['circle', 'check-circle', 'plus', 'x'];

const Icon = ({name, size, color}: IconProps) => {
  const IconComponent = () => {
    if (FeatherIcons.includes(name)) {
      return <Feather name={name} size={size ?? 20} color={color ?? '#000'} />;
    }

    return <></>;
  };

  return <IconComponent />;
};

export default Icon;
