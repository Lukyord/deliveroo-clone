import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MainBody from "./components/MainBody";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white pt-2">
      <Header />
      <SearchBar />
      <MainBody />
    </SafeAreaView>
  );
}
