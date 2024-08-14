import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Grid from "@/components/Grid";
import { Button } from "@rneui/base";
import { AnimatedBicep } from "@/components/AnimatedBicep";
import Account from "@/components/Account";
import { useSession } from "@/hooks/useSession";
import { useState } from "react";

export default function HomeScreen() {

  // Mock data
  const mockData = [
    { name: "John", workout: "test", role: "Developer" },
    { name: "Elisabeth", workout: "test", role: "Athlete" },
    { name: "Other", workout: "test", role: "Developer" },

  ];

  // auth
  const { session } = useSession();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      {/* Account needs to be its own section */}
      {session ? <Account session={session} /> : null}

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Today's Challenge</ThemedText>
        <AnimatedBicep />
        <Button>Create New Challenge</Button>
      </ThemedView>
      <Grid data={mockData} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
