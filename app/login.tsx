import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/button";
import { Link } from "expo-router";

export default function login() {
  return (
    <View>
      <Text>login page</Text>
      <Button>
        Login
        <Link href="/">Go to index</Link>
      </Button>
    </View>
  );
}
