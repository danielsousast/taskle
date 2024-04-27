/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Modal from 'react-native-modal';
import * as S from './styles';
import {Text} from '../Text';
import {Button} from '../Button';
import {Input} from '../Input';
import {Switch} from 'react-native';

interface ModalTaskProps {
  onRequestClose: () => void;
  isVisible: boolean;
}

export function ModalTask({isVisible, onRequestClose}: ModalTaskProps) {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['down']}
      onSwipeComplete={onRequestClose}
      onDismiss={onRequestClose}
      onBackdropPress={onRequestClose}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}>
      <S.Container>
        <Text bold fontSize={24} center>
          Add task
        </Text>
        <Input label="Description" placeholder="Task" />
        <S.Row>
          <Text bold fontSize={16}>
            Hour
          </Text>
          <Text bold fontSize={16}>
            Today
          </Text>
        </S.Row>
        <S.Row
          style={{
            marginVertical: 10,
          }}>
          <S.TimeButton>
            <Text fontSize={16}>18:00</Text>
          </S.TimeButton>

          <Switch
            style={{
              transform: [{scaleX: 0.9}, {scaleY: 0.9}],
            }}
          />
        </S.Row>
        <Button onPress={onRequestClose} />
      </S.Container>
    </Modal>
  );
}
