import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItems,
  removeFromBasket,
} from "../../../features/basketSlice";
import { urlFor } from "../../../sanity";

export default function ScrollableOrder() {
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <ScrollView className="divide-y divide-gray-200">
      {Object.entries(groupedItemsInBasket).map(([key, items]) => (
        <View
          key={key}
          className="flex-row items-center space-x-3 bg-white py-2 px-5"
        >
          <Text className="text-[#00CCBB]">{items.length} x</Text>
          <Image
            source={{
              uri: urlFor(items[0]?.image).url(),
            }}
            className="h-12 w-12 rounded-full"
          />
          <Text className="flex-1">{items[0]?.name}</Text>

          <Text className="text-gray-400">
            <Currency quantity={items[0]?.price} currency="THB" />
          </Text>

          <TouchableOpacity>
            <Text
              className="text-[#00CCBB] text-xs"
              onPress={() => dispatch(removeFromBasket({ id: key }))}
            >
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
