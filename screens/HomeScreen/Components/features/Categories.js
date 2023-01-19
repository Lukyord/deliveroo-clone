import { ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingHorizontal: 35,
        paddingTop: 10,
      }}
      horizontal
    >
      <CategoriesCard imgUrl="https:/links.papareact.com/wru" title="testing" />
      <CategoriesCard imgUrl="https:/links.papareact.com/wru" title="testing" />
      <CategoriesCard imgUrl="https:/links.papareact.com/wru" title="testing" />
    </ScrollView>
  );
}
