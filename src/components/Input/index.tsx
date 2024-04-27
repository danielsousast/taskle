import React from 'react';

import * as S from './styles';

interface Props {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  label?: string;
}

export function Input({value, onChangeText, placeholder, label}: Props) {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </S.Wrapper>
  );
}
