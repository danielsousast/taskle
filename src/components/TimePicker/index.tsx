/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import * as S from './styles';
import {Text} from '../Text';
import InputSpinner from 'react-native-input-spinner';

interface PhotoPickerProps {
  isVisible: boolean;
  onRequestedClose: () => void;
  onSelectTime: (date: string) => void;
}

export function TimePicker({
  isVisible,
  onRequestedClose,
  onSelectTime,
}: PhotoPickerProps) {
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);

  const handleSelectTime = async () => {
    const parsedHour = hour < 10 ? `0${hour}` : hour;
    const parsedMinute = minute < 10 ? `0${minute}` : minute;
    const date = `${parsedHour}:${parsedMinute}`;
    onSelectTime(date);
    onRequestedClose();
  };

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onDismiss={onRequestedClose}
      onBackdropPress={onRequestedClose}
      swipeDirection={['down']}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <S.Container>
        <S.Content>
          <Text center bold>
            Selecione o horário
          </Text>
          <S.Row>
            <S.Column>
              <Text center bold marginBottom={12}>
                Hour(24h)
              </Text>
              <InputSpinner
                max={23}
                min={0}
                step={1}
                skin="clean"
                style={{
                  borderRadius: 8,
                }}
                onChange={setHour}
              />
            </S.Column>
            <S.Column>
              <Text center bold marginBottom={12}>
                Minute
              </Text>
              <InputSpinner
                max={59}
                min={0}
                step={1}
                skin="clean"
                style={{
                  borderRadius: 8,
                }}
                onChange={setMinute}
              />
            </S.Column>
          </S.Row>
        </S.Content>
        <S.ButtonRow>
          <S.Button onPress={handleSelectTime} color="#000">
            <Text bold colorStyle="white">
              Done
            </Text>
          </S.Button>
          <S.Button onPress={onRequestedClose}>
            <Text bold>Cancel</Text>
          </S.Button>
        </S.ButtonRow>
      </S.Container>
    </ReactNativeModal>
  );
}
