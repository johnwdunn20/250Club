import "../global.css"; // only import once at the root - doesn't need to be in other files
import { Text, View } from "react-native";
import Button from "@/components/button";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </View>
  );
}
