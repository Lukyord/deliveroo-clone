import React from "react";
import { View, TextInput } from "react-native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";

export default function SearchBar() {
  return (
    <View className="flex-row items-center pb-2 mx-3 space-x-2">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-xl">
        <MagnifyingGlassIcon size={20} color="gray" />
        <TextInput
          placeholder="Restaurants and Cuisine"
          keyboardType="default"
        />
      </View>

      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>
  );
}
