import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './IntroScreen/LoginScreen';
import Signup from './IntroScreen/Signup';

export default function App() {
  return (
    <View style={{flex: 1}} >
     <Signup/>
      <StatusBar style="auto" />
    </View>
  );
}

