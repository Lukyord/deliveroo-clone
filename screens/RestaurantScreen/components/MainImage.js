import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function MainImage({ imgUrl }) {
  const navigation = useNavigation();

  return (
    <View className="relative">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-full h-56 bg-gray-300 p4"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="absolute top-8 left-3 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
}
