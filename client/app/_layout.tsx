import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform } from "react-native";
import { Slot } from "expo-router";

// create the query client - will use all default settings for now
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // How often to refetch the data
      // staleTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 0,

      // How long to keep the data in cache
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// Only persist the query client cache when testing on mobile, not on web
if (Platform.OS !== "web") {
  // React Native Async Storage is used to persist the query client cache
  // It's a key-value store that is async and unencrypted
  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
  });

  // Persist the query client cache to async storage
  persistQueryClient({
    queryClient,
    persister: asyncStoragePersister,
  });
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Access the root navigation state to prevent a redicrect before everything loads - expo doesn't like when I try to do that
  // const rootNavigationState = useRootNavigationState();
  // console.log(rootNavigationState);
  // if (!rootNavigationState?.key) return null;

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // if (!loaded) {
  //   return <Slot/>;
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack> */}
        {/* Need to figure out how to use this */}
        <Slot />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
