import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{flex:1 }}>
      <View>
        <View style={{ flex : 1, backgroundColor: "tomato" }}></View>
        <View style={{ flex : 1.5, backgroundColor: "skyblue" }}></View>
        <View style={{ flex : 1, backgroundColor: "orange" }}></View>
      </View>
    </View>
  );
}
