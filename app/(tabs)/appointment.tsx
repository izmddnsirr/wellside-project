import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppointmentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Make an Appointment</Text>

      <View style={{ marginTop: 16 }}>
        <Button title="Select Service" onPress={() => {}} />
      </View>

      <View style={{ marginTop: 12 }}>
        <Button title="Choose Barber" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: "600" },
});
