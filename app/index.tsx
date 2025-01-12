import "../global.css"; // only import once at the root - doesn't need to be in other files
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-blue-500 text-xl mb-4">
        This should be blue and larger
      </Text>
      <Text className="text-red-500">This should be red</Text>
    </View>
  );
}
