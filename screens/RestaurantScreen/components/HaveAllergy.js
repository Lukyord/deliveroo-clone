import { Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";

export default function HaveAllergy() {
  return (
    <TouchableOpacity className="flex-row items-center space-x-2 p-3 border-y border-gray-300">
      <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
      <Text className="pl-2 flex-1 text-md font-bold">
        Have a food allergy?
      </Text>
      <ChevronRightIcon color="#00CCBB" />
    </TouchableOpacity>
  );
}
