import { View, Text, Image } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../../../features/restaurantSlice";

export default function DeliveryTime() {
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg text-gray-400">Estimated Arrival</Text>
          <Text className="text-4xl font-bold">44-45 Minutes</Text>
        </View>
        <Image
          source={{
            uri: "https://links.papareact.com/fls",
          }}
          className="h-20 w-20"
        />
      </View>

      <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

      <Text className="mt-3 text-gray-500">
        Your Order at {restaurant.title} is being prepared...
      </Text>
    </View>
  );
}
