import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Delivery() {
  return (
    <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
      <Image
        source={{
          uri: "https://links.papareact.com/wru",
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <Text className="flex-1">Deliver in 50-75 min</Text>
      <TouchableOpacity>
        <Text className="text-[#00CCBB]">Change</Text>
      </TouchableOpacity>
    </View>
  );
}
