import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Greeting Section */}
        <View className="mx-4 mt-4">
          <Text className="text-3xl font-semibold">Hello, Izamuddin 👋</Text>
          <Text className="text-gray-500 text-lg">Ready for a fresh cut today?</Text>
        </View>

        {/* Card */}
        <View className="bg-slate-200 mx-4 mt-4 rounded-2xl p-5">
          <Text className="text-white text-xl font-semibold">
            Style your hair with confidence
          </Text>
          <Text className="text-gray-300 mt-1">
            Book your appointment now and skip the queue
          </Text>
          <TouchableOpacity className="mt-4 bg-white py-2 px-4 rounded-xl self-start">
            <Text className="font-semibold text-slate-900">Book Now</Text>
          </TouchableOpacity>
        </View>

        {/*  */}
      </ScrollView>
    </SafeAreaView>
  );
}
