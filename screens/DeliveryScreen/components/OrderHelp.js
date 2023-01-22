import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function OrderHelp() {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center p-5">
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <XMarkIcon color="white" size={30} />
      </TouchableOpacity>
      <Text className="font-light text-white text-lg">Order Help</Text>
    </View>
  );
}
