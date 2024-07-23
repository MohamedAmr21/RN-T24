import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Navbar({}) {
  return (
    <View className="flex flex-row p-3 justify-between items-center">
      <TouchableOpacity>
        <Ionicons name="menu" size={32} />
      </TouchableOpacity>
      <Text className="text-2xl font-bold">Trasho</Text>
      <TouchableOpacity>
        <Ionicons name="cart" size={32} />
      </TouchableOpacity>
    </View>
  );
}