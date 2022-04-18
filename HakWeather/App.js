import { StatusBar } from "expo-status-bar";
import React from "react";
import { View ,Text, StyleSheet} from "react-native";

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text>Seoul</Text>
      </View>
      <View style={style.weather}></View>
        
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1, backgroundColor:"aliceblue"
  },
  city:{
    flex : 1, 
    backgroundColor :"lemonchiffon"
  },
  weather:{
    flex: 3, 
    backgroundColor:"lightskyblue"
  },
});
