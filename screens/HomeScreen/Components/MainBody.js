import React from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import Categories from "./features/Categories";
import FeaturedRows from "./FeaturedRows";

export default function MainBody() {
  return (
    <View>
      <Categories />
      <FeaturedRows />
    </View>
  );
}
