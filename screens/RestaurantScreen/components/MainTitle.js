import { View, Text } from "react-native";
import React from "react";
import { MapIcon, StarIcon } from "react-native-heroicons/solid";

export default function MainTitle({
  title,
  rating,
  genre,
  address,
  shortDescription,
}) {
  return (
    <View className="px-4 pt-4 pb-2">
      <Text className="text-3xl font-bold">{title}</Text>
      <View className="flex-row space-x-2 my-1">
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapIcon color="green" opacity={0.5} size={22} />
          <Text className="text-gray-500">
            <Text className="text-green-500">Nearby</Text> . {address}
          </Text>
        </View>
      </View>
      <Text className="text-gray-500 mt-2 pb-4 ">{shortDescription}</Text>
    </View>
  );
}
