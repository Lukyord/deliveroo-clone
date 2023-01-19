import { View, Text } from "react-native";
import React from "react";
import FeaturedCarousel from "./features/FeaturedCarousel";

export default function FeaturedRows() {
  return (
    <View>
      <FeaturedCarousel
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
      />
    </View>
  );
}
