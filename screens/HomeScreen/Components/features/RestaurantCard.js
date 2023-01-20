import { TouchableOpacity, Text, Image, View } from "react-native";
import React from "react";
import { MapIcon, MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../../../sanity";

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-xl rounded-xl">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded"
      />
      <View className="px-3 pb-4">
        <Text className="text-lg font-bold pt-2">{title}</Text>

        <View className="flex-row items-center space-x-2">
          <StarIcon color="green" opacity="0.5" size={22} />
          <Text className="text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-2">
          <MapPinIcon opacity={0.4} size={22} color="gray" />
          <Text className="text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
