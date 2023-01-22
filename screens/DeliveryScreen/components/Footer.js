import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
      <Image
        source={{
          uri: "https:/links.papareact.com/wru",
        }}
        className="h-12 w-12 bg-gray-300 rounded-full ml-5"
      />
      <View className="flex-1">
        <Text className="text-lg">Tanabordee Tansiri</Text>
        <Text className="text-gray-400">Your Rider</Text>
      </View>
      <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
    </SafeAreaView>
  );
}
