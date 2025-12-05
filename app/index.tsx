import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />

      {/* Logo ring */}
      <View className="w-20 h-20 rounded-full border-2 border-neutral-700 items-center justify-center">
        <Text className="text-2xl font-extrabold tracking-widest">WS</Text>
      </View>

      {/* Brand name */}
      {/* <Text className="text-3xl font-extrabold tracking-widest text-white">
        WELLSIDE
      </Text> */}

      {/* Tagline */}
      {/* <Text className="mt-2 text-sm text-neutral-300">
        Barbershop & Grooming Studio
      </Text> */}

      {/* Loader at the bottom */}
      <View className="absolute bottom-20 left-0 right-0 items-center">
        <ActivityIndicator size="small" color="#000000" />
      </View>
    </View>
  );
}
