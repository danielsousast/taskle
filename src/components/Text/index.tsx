import React from 'react';
import styled from 'styled-components/native';

interface RNTextProps {
  bold?: boolean;
  fontSize?: number;
  colorStyle?: 'white' | 'black';
  center?: boolean;
  marginBottom?: number;
}

export const RNText = styled.Text<RNTextProps>`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => (props.colorStyle === 'white' ? 'white' : 'black')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

interface Props extends RNTextProps {
  children: string;
}

export function Text({
  children,
  bold = false,
  fontSize = 15,
  colorStyle = 'black',
  center = false,
  ...rest
}: Props) {
  return (
    <RNText
      {...rest}
      bold={bold}
      center={center}
      fontSize={fontSize}
      colorStyle={colorStyle}>
      {children}
    </RNText>
  );
}
