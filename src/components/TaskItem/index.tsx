/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as S from './styles';
import CheckBox from '@react-native-community/checkbox';

interface TaskItemProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  item: {
    id: number;
    title: string;
    done: boolean;
  };
}

export function TaskItem({value, onValueChange, item}: TaskItemProps) {
  const color = value ? '#ccc' : '#000';
  return (
    <S.TaskWrapper>
      <S.CheckWrapper>
        <CheckBox
          boxType="square"
          disabled={false}
          onCheckColor={color}
          tintColor={color}
          onTintColor={color}
          value={value}
          style={{
            width: 22,
            height: 22,
          }}
          onValueChange={onValueChange}
        />
      </S.CheckWrapper>
      <S.TaskText selected={value}>{item.title}</S.TaskText>
    </S.TaskWrapper>
  );
}
