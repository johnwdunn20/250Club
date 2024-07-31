// Expo creates the __DEV__ variable for us, so we can use it to determine if we are in development or production mode.


export const API_URL = __DEV__ 
  ? process.env.EXPO_PUBLIC_DEV_API_URL || 'http://localhost:3000'
  : process.env.EXPO_PUBLIC_PROD_API_URL || 'https://api.yourapp.com';

export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL || 'URL PLACEHOLDER';
export const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'KEY PLACEHOLDER';