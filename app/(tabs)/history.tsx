import { Image, StyleSheet, Platform } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "@/hooks/useSession";
import { supabase } from "@/lib/supabase";

interface ServerResponse {
  message: string;
}

export default function History() {
  const { session } = useSession();

  console.log("session", session);

  const fetchHistory = async () => {
    const { data, error } = await supabase.from("exercises").select("*");
    // Need to revisit schema and figure out exactly what I want

    console.log("data", data);
    return data;
  };

  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: fetchHistory,
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/barbell.png")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">250 Club History</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">You play to win the game </ThemedText>
        {data &&
          data.map((exercise: any) => (
            <ThemedText key={exercise.id}>{exercise.name}</ThemedText>
          ))}
        <ThemedText></ThemedText>
      </ThemedView>
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
  headerImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
