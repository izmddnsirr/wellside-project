import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Buat masa ni terus pergi ke tabs
      router.replace("/(auth)/login");
      // Kalau nanti nak check login:
      // kalau tak login -> router.replace("/(auth)/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <StatusBar style="auto" />

      <Text style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 50 }}>
        WELLSIDE
      </Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
