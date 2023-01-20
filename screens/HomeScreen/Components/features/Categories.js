import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import sanityClient, { urlFor } from "../../../../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(
    () =>
      sanityClient.fetch(`*[_type == 'category']`).then((data) => {
        setCategories(data);
      }),
    []
  );

  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingLeft: 10,
        paddingTop: 10,
      }}
      horizontal
    >
      {categories.map((category) => (
        <CategoriesCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
      {/* <CategoriesCard
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
      /> */}
    </ScrollView>
  );
}
