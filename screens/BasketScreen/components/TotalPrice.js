import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

export default function TotalPrice() {
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  return (
    <View className="p-5 bg-white mt-5 space-y-4">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">SubTotal</Text>
        <Text className="text-gray-400">
          <Currency quantity={basketTotal} currency="THB" />
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">
          <Currency quantity={5.99} currency="THB" />
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text>Order Total</Text>
        <Text className="font-extrabold">
          <Currency quantity={basketTotal + 5.99} currency="THB" />
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("PreparingOrder")}
        className="rounded-lg bg-[#00CCBB] p-4"
      >
        <Text className="text-center text-white text-lg font-bold">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}
