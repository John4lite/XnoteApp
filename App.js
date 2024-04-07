import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './IntroScreen/LoginScreen';
import Signup from './IntroScreen/Signup';
import HomeScreen from './IntroScreen/HomeScreen';

export default function App() {

  return (
    <View style={{flex: 1}} >
     <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
  
}

