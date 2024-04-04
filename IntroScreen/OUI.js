import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
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
});
/*<Text style={{ fontWeight: 'bold', color: 'green', paddingTop: 400, paddingBottom: 20, textAlign:'center' }} >Login</Text>

<View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: '8', marginBottom: '20', paddingLeft: 20 }}>
    <TextInput placeholder='Email id' keyboardType='email-address' style={{ paddingVertical: '9', flex: 1 }}></TextInput>

</View>

<View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: '8', marginBottom: '25', paddingLeft: 20, padding: 5 }}>
    <TextInput placeholder='password' secureTextEntry={true} style={{ paddingVertical: '0', flex: 1 }}></TextInput>
    <TouchableOpacity><Text style={{ color: 'green' }}>forgot password?</Text></TouchableOpacity>
</View>

<Text style={{ textAlign: 'center', color: 'green', padding: 5 }}>or continue with..</Text>
<View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 50 }}>

        <TouchableOpacity><FontAwesomeIcon icon={faGoogle} /></TouchableOpacity>

        <TouchableOpacity><FontAwesomeIcon icon={faTwitter} /></TouchableOpacity>

        <TouchableOpacity><FontAwesomeIcon icon={faInstagram} /></TouchableOpacity>
    </View>
</View>
<StatusBar style="auto" />*/