import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import MainImage from "./components/MainImage";
import MainTitle from "./components/MainTitle";
import HaveAllergy from "./components/HaveAllergy";
import Menu from "./components/Menu";

export default function RestaurantScreen() {
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <ScrollView>
      <MainImage imgUrl={imgUrl} />

      <View className="bg-white">
        <MainTitle
          title={title}
          address={address}
          shortDescription={shortDescription}
          genre={genre}
        />
        <HaveAllergy />
      </View>
      <Menu dishes={dishes} />
    </ScrollView>
  );
}
