import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

export const LightTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: '#FFFFFF',
    text: '#000000',
    primary: '#1E90FF',
    card: '#F9F9F9',
    border: '#E5E5E5',
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#000000',
    text: 'yellow',
    primary: '#1E90FF',
    card: '#121212',
    border: '#333333',
  },
};
