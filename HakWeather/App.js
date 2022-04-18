import { StatusBar } from "expo-status-bar";
import React from "react";
import { View ,Text, StyleSheet, ScrollView, Dimensions} from "react-native";

const {height, width } = Dimensions.get("window");
export default function App() {
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>Seoul</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={style.weather}>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
      </ScrollView>
        
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
    backgroundColor:"red" ,
  },

  day:{
    alignItems : "center",
  },
  temp:{
    marginTop: 50,
    fontWeight:"600",
    fontSize:178,
  },
  description:{
    marginTop:-30,
    fontSize:60,
  },
});
