import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();

  const onRegister = () => {
    // 👉 Sini nanti sambung ke backend / Supabase
    // Contoh: await supabase.auth.signUp({ email, password, options: { data: { name } } });

    // Register action
  };

  const onBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Button title="Register" onPress={onRegister} />
      <Button title="Back" onPress={onBack} />
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
