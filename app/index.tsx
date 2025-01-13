import "../global.css"; // only import once at the root - doesn't need to be in other files
import { Text, View } from "react-native";
import Button from "@/components/button";

export default function Index() {
  return (
    <View className="flex flex-col items-center justify-center h-full space-y-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </View>
  );
}
