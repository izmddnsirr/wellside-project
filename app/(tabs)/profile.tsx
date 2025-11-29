import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>User Name</Text>
      <Text style={styles.email}>user@email.com</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, alignItems: "center", marginTop: 50 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 20, fontWeight: "600", marginTop: 16 },
  email: { marginTop: 4, opacity: 0.6 },
});
