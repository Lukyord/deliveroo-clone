import { ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingLeft: 10,
        paddingTop: 10,
      }}
      horizontal
    >
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing1"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing2"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing3"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing4"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing5"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing6"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing7"
      />
    </ScrollView>
  );
}
