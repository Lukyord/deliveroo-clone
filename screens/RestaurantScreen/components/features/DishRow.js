import { View, Text, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import React from "react";

export default function DishRow({ id, name, description, price, image }) {
  return (
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400">
          <Currency quantity={price} currency="THB" />
        </Text>
      </View>
    </TouchableOpacity>
  );
}
