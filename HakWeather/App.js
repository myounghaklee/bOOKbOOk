import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Statusbar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textdb}>아제발 돌아라 진짜</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize:100,    
  },
});
