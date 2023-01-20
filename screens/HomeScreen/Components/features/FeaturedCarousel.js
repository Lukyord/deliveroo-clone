import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../../../sanity";

export default function FeaturedCarousel({ title, description, id }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'featured' && _id == $id] {
        ...,
        restaurant[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurant);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-2">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-sm text-gray-500 px-2">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingLeft: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
        {/* <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Sumo Sushi!"
          rating="4.5"
          genre="Japanese"
          address="123 Main st."
          shortDescription="This is OISHII!!"
          dishes={[]}
          long={3}
          lat={9}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Sumo Sushi!"
          rating="4.5"
          genre="Japanese"
          address="123 Main st."
          shortDescription="This is OISHII!!"
          dishes={[]}
          long={3}
          lat={9}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Sumo Sushi!"
          rating="4.5"
          genre="Japanese"
          address="123 Main st."
          shortDescription="This is OISHII!!"
          dishes={[]}
          long={3}
          lat={9}
        /> */}
      </ScrollView>
    </View>
  );
}
