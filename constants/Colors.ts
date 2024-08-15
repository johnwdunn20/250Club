// colors.ts

interface ColorTheme {
  primary: string;
  tint: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  error: string;
  tabIconDefault: string;
  tabIconSelected: string;
}

interface AppTheme {
  light: ColorTheme;
  dark: ColorTheme;
}

export const Colors: AppTheme = {
  light: {
    primary: '#1E88E5',    // Brighter blue
    tint: '#1E88E5',       // Same as primary
    secondary: '#42A5F5',  // Lighter bright blue
    background: '#F5F5F5', // Very light gray
    surface: '#FFFFFF',    // White
    text: '#212121',       // Very dark gray (almost black)
    textSecondary: '#757575', // Medium gray
    accent: '#FFA000',     // Bright amber
    error: '#D32F2F',      // Bright red
    tabIconDefault: '#BDBDBD', // Light gray
    tabIconSelected: '#1E88E5', // Bright blue (same as primary)
  },
  dark: {
    primary: '#2196F3',    // Vivid blue
    tint: '#2196F3',       // Same as primary
    secondary: '#64B5F6',  // Light blue
    background: '#121212', // Very dark gray (material design dark theme background)
    surface: '#1E1E1E',    // Slightly lighter than background
    text: '#FFFFFF',       // White
    textSecondary: '#B0BEC5', // Light blue-gray
    accent: '#FFB300',     // Bright amber
    error: '#FF5252',      // Bright red
    tabIconDefault: '#78909C', // Blue-gray
    tabIconSelected: '#2196F3', // Vivid blue (same as primary)
  }
};