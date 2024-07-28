/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },

  // light: {
  //   primary: '#2C3E50',    // Dark blue
  //   secondary: '#34495E',  // Slightly lighter blue
  //   background: '#ECF0F1', // Light gray
  //   surface: '#FFFFFF',    // White
  //   text: '#2C3E50',       // Dark blue
  //   textSecondary: '#7F8C8D', // Medium gray
  //   accent: '#3498DB',     // Bright blue
  //   error: '#E74C3C',      // Red
  // },
  // dark: {
  //   primary: '#3498DB',    // Bright blue
  //   secondary: '#2980B9',  // Darker blue
  //   background: '#1A1A1A', // Very dark gray
  //   surface: '#2C3E50',    // Dark blue
  //   text: '#ECF0F1',       // Light gray
  //   textSecondary: '#BDC3C7', // Light gray
  //   accent: '#E74C3C',     // Red
  //   error: '#FF5252',      // Lighter red
  // }
};
