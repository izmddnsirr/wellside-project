import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your booking is confirmed!</Text>
        <Text style={styles.cardTime}>Today, 3:00 PM</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: "600" },
  card: {
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f3f3f3",
  },
  cardTitle: { fontSize: 16, fontWeight: "500" },
  cardTime: { marginTop: 4, opacity: 0.6 },
});
