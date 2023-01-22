import { View, SafeAreaView } from "react-native";
import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import Delivery from "./components/Delivery";
import ScrollableOrder from "./components/ScrollableOrder";
import TotalPrice from "./components/TotalPrice";

export default function BasketScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <Header />
        <Delivery />
        <ScrollableOrder />
        <TotalPrice />
      </View>
    </SafeAreaView>
  );
}
