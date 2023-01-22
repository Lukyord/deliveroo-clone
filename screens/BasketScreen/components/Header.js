import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../../../features/restaurantSlice";

export default function Header() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
      <View>
        <Text className="text-lg font-bold text-center">Basket</Text>
        <Text className="text-center text-gray-400">{restaurant.title}</Text>
      </View>

      <TouchableOpacity
        onPress={navigation.goBack}
        className="rounded-full bg-gray-100 absolute top-3 right-5"
      >
        <XCircleIcon color="#00CCBB" size={50} />
      </TouchableOpacity>
    </View>
  );
}
