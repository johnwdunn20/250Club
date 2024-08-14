import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Grid from "@/components/Grid";
import { Button } from "@rneui/base";
import { AnimatedBicep } from "@/components/AnimatedBicep";
import Account from "@/components/Account";
import { useSession } from "@/hooks/useSession";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from "@/components/Profile";
import Today from "@/components/Today";

const Drawer = createDrawerNavigator();


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
    <>
        {/* <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Today} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer> */}
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
    </>
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
