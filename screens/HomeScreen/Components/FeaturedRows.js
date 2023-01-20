import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FeaturedCarousel from "./features/FeaturedCarousel";
import sanityClient from "../../../sanity";

export default function FeaturedRows() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured'] {
      ...,
      restaurant[]->{
        ...,
        dish[]->,
        type->{
          name
        }
      },
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, [id]);

  return (
    <View className="pb-4">
      {featuredCategories.map((category) => (
        <FeaturedCarousel
          key={category._id + Math.random().toString()}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}

      {/* <FeaturedCarousel
        title="Featured"
        description="Paid placement from out partners"
        id="1"
      />
      <FeaturedCarousel
        title="Tasty Discounts"
        description="Everyone has been enjoying these discounts"
        id="2"
      />
      <FeaturedCarousel
        title="Offers near you !"
        description="Why not support your local restaurant tonight!"
        id="3"
      /> */}
    </View>
  );
}
