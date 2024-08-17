import React from "react";
import { View, ActivityIndicator } from "react-native";
import Auth from "@/components/Auth";
import { useSession } from "@/hooks/useSession";
import { Redirect } from "expo-router";

export default function SignIn() {

  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (session) {
    return <Redirect href="/" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Auth />
    </View>
  );
}
