import {generateShadow} from './shadows';
import {
  defaultShadow,
  shadow02,
  shadow03,
  shadow04,
  shadow05,
  shadow06,
  shadow07,
  shadow08,
} from './shadows';

export default {
  colors: {
    primary: '#000',
    secondary: '#fff',
    background: '#fafafa',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    shape: '#fff',
  },
  shadows: {
    defaultShadow: generateShadow(defaultShadow),
    shadow02: generateShadow(shadow02),
    shadow03: generateShadow(shadow03),
    shadow04: generateShadow(shadow04),
    shadow05: generateShadow(shadow05),
    shadow06: generateShadow(shadow06),
    shadow07: generateShadow(shadow07),
    shadow08: generateShadow(shadow08),
  },
};
