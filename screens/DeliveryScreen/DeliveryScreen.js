import { View, SafeAreaView } from "react-native";
import React from "react";
import DeliveryTime from "./components/DeliveryTime";
import Map from "./components/Map";
import Footer from "./components/Footer";
import OrderHelp from "./components/OrderHelp";

export default function DeliveryScreen() {
  return (
    <View className="bg-[#00CCBB] flex-1 pt-5">
      <SafeAreaView className="z-50">
        <OrderHelp />
        <DeliveryTime />
      </SafeAreaView>
      <Map />
      <Footer />
    </View>
  );
}
