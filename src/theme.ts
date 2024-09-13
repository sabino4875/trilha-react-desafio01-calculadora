import { DefaultTheme } from 'styled-components';
import 'normalize.css';

const CalculatorTheme: DefaultTheme = {
    buttonTheme: {
        border: '#CDCDCD',
        background: '#00AAF0',
        foreground: '#FFFFFF',
        padding: '1.25rem',
        fontSize: '1.5rem',
    },
    inputTheme: {
      background: '#AAAAFF',
      height: '4.6875rem',
      fontSize: '1.5rem',
      foreground: '#FFFFFF',
      padding: '0.625rem',
    }
  };

export { CalculatorTheme };