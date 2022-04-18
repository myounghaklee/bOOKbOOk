import { StatusBar } from "expo-status-bar";
import React from "react";
import { View ,Text, StyleSheet} from "react-native";

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>Seoul</Text>
      </View>
      <View style={style.weather}>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        </View>
        
    </View>
  );
}


const style = StyleSheet.create({
  container:{
    flex:1, backgroundColor:"lemonchiffon"
  },
  city:{
    flex : 1.2, 
    backgroundColor :"lemonchiffon",
    justifyContent:"center",
    alignItems:"center",
  },
  cityName:{
    fontSize:68,
    fontWeight:"500",
  },
  weather:{
    flex: 3, 
    
  },
  day:{
    flex :1,
    alignItems : "center",
  },
  temp:{
    marginTop: 50,
    fontSize:178,
  },
  description:{
    marginTop:-30,
    fontSize:60,
  },
});
