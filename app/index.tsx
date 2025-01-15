import "../global.css"; // only import once at the root - doesn't need to be in other files
import { Text, View } from "react-native";
import Button from "@/components/button";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex flex-col items-center justify-center h-full space-y-4">
      <Text className="text-2xl font-bold">Splash Page</Text>
      {/* asChild transfers link capabilities to child component */}
      <Link href="/login" asChild>
        <Button>Login (Primary Button)</Button>
      </Link>
      <Button variant="secondary">Secondary</Button>
      <Link href="/login">Login 2</Link>
    </View>
  );
}
