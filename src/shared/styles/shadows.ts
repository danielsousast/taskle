import {Platform} from 'react-native';
import {css} from 'styled-components';

export interface ShadowProps {
  elevation: number;
  xOffset: number;
  yOffset: number;
  blurRadius: number;
  color: string;
}

export const defaultShadow = {
  elevation: 4,
  xOffset: 0,
  yOffset: 20,
  blurRadius: 30,
  color: 'rgba(197, 197, 197, 0.32)',
};

export const shadow02 = {
  elevation: 4,
  xOffset: 0,
  yOffset: 10,
  blurRadius: 20,
  color: 'rgba(197, 197, 197, 0.32)',
};

export const shadow03 = {
  elevation: 4,
  xOffset: 0,
  yOffset: 4,
  blurRadius: 14,
  color: 'rgba(255, 24, 162, 0.3)',
};

export const shadow04 = {
  elevation: 4,
  xOffset: 0,
  yOffset: 20,
  blurRadius: 30,
  color: 'rgba(197, 197, 197, 0.3)',
};

export const shadow05 = {
  elevation: 4,
  xOffset: 0,
  yOffset: 10,
  blurRadius: 15,
  color: 'rgba(197, 197, 197, 0.32)',
};

export const shadow06 = {
  elevation: 4,
  xOffset: 0,
  yOffset: 0,
  blurRadius: 10,
  color: 'rgba(197, 197, 197, 0.32)',
};

export const shadow07 = {
  elevation: 4,
  xOffset: 0,
  yOffset: 0,
  blurRadius: 20,
  color: 'rgba(197, 197, 197, 0.32)',
};

export const shadow08 = {
  elevation: 4,
  xOffset: 0,
  yOffset: 10,
  blurRadius: 20,
  color: 'rgba(197, 197, 197, 0.3)',
};

export const generateShadow: any = ({
  elevation,
  xOffset,
  yOffset,
  blurRadius,
  color,
}: ShadowProps) => {
  return Platform.OS === 'ios'
    ? css`
        box-shadow: ${xOffset}px ${yOffset}px ${blurRadius}px ${color};
      `
    : css`
        elevation: ${elevation};
      `;
};
