import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => router.replace("/(tabs)")} />
      <Button
        title="Register"
        onPress={() => router.push("/(auth)/register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
});
