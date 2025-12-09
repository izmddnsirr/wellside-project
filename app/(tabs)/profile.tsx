import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Greeting Section */}
        <View className="mx-5 mt-6 flex-row justify-between items-center">
          <View>
            <Text className="text-sm text-gray-600">W E L L S I D E + </Text>
            <Text className="text-3xl mt-1 font-semibold">Profile</Text>
            <Text className="text-gray-500 text-lg">
              Customized your profile
            </Text>
          </View>
          <TouchableOpacity className="border px-6 py-3 rounded-full bg-white border-gray-300">
            <Text className="font-semibold">Log out</Text>
          </TouchableOpacity>
        </View>

        {/* Card */}
        <View className="bg-slate-950 mx-5 mt-7 rounded-3xl p-5 flex-row items-center">
          <View className="w-16 h-16 rounded-full bg-gray-300 mr-5 overflow-hidden justify-center items-center">
            {/* Replace the source URI with user profile image path if available */}
            <Text className="text-2xl text-black font-semibold text-center">
              MI
            </Text>
            {/* Example for Image: */}
            {/* <Image source={{ uri: "https://example.com/profile.jpg" }} className="w-16 h-16 rounded-full" /> */}
          </View>
          <View style={{ flex: 1 }}>
            <Text className="text-white font-semibold text-xl">
              Muhamad Izamuddin Mohd Nasir
            </Text>
            <Text className="text-gray-300 text-base mt-1">
              izamuddin.nasir@gmail.com
            </Text>
          </View>
          <TouchableOpacity className="bg-white px-4 py-2 rounded-full active:opacity-80">
            <Text className="font-semibold text-black">Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
