import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../../assets/gif/delivery.gif")}
        animation="slideInUp"
        interationCount={1}
        className="w-96 h-96"
      />
      <Animatable.Text
        animation="slideInUp"
        interationCount={1}
        className="text-md my-10 text-white font-bold text-center"
      >
        Waiting for the Restaurant to accept your Order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
}
