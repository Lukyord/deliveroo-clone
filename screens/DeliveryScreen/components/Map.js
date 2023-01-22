import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../../../features/restaurantSlice";

export default function Map() {
  const restaurant = useSelector(selectRestaurant);

  return (
    <MapView
      initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      className="flex-1 -mt-10 z-0"
      mapType="mutedStandard"
    >
      <Marker
        coordinate={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
        }}
        title={restaurant.title}
        description={restaurant.shortDescription}
        indentifier="origin"
        pinColor="#00CCBB"
      />
    </MapView>
  );
}
