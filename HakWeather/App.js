import React from "react";
import { View } from "react-native";

export default function App(){
  return (
    <View>
      <View style ={{width:100, height:100, backgroundColor : "tomato"}}></View>
      <View style ={{width:100, height:100, backgroundColor: "skyblue"}}></View>
      <View style ={{width:100, height:100, backgroundColor : "orange"}}></View>
    </View>
  );
}