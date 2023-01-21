import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import MainImage from "./components/MainImage";
import MainTitle from "./components/MainTitle";
import HaveAllergy from "./components/HaveAllergy";
import Menu from "./components/Menu";
import BasketIcon from "../OverlayBasket/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../features/restaurantSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />
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
    </>
  );
}
