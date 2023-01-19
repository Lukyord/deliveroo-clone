import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import MainBody from "./Components/MainBody";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-2">
      <Header />
      <SearchBar />
      <MainBody />
    </SafeAreaView>
  );
}
