import { Tabs } from "expo-router";
import React, { useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Slot,
  Redirect,
  useSegments,
  useRootNavigationState,
} from "expo-router";
import { useSession } from "@/hooks/useSession";
import { ActivityIndicator, View, Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Auth
  const { session, isLoading } = useSession();
  const segments = useSegments();

  console.log("session: ", session);
  console.log("segments: ", segments);

  // const inAuthGroup = segments[0] === "(auth)";

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!session) {
    // Redirect to the sign-in page if the user is not signed in
    return <Redirect href="/signIn" />;
  } else {
    // Redirect away from the sign-in page if the user is signed in
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "time" : "time-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="connect"
          options={{
            title: "Connect",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    );
  }
}
