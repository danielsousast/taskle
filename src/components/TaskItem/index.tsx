/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as S from './styles';
import CheckBox from '@react-native-community/checkbox';
import {Task} from '../../features/task/interfaces';
import {Swipeable} from 'react-native-gesture-handler';
import {Animated, View} from 'react-native';
import {Text} from '../Text';

interface TaskItemProps {
  value: boolean;
  onDeletePress: () => void;
  onValueChange: (newValue: boolean) => void;
  item: Task;
}

export function TaskItem({
  value,
  onValueChange,
  item,
  onDeletePress,
}: TaskItemProps) {
  const color = value ? '#ccc' : '#000';
  const renderRightActions = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<number>,
  ) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View>
        <Animated.View style={{opacity}}>
          <S.DeleteButton onPress={onDeletePress}>
            <Text colorStyle="white">Delete</Text>
          </S.DeleteButton>
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
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
    </Swipeable>
  );
}
