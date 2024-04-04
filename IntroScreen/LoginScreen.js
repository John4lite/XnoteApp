import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function LoginScreen() {
    const myImage = require('../assets/freak.png')
    return (
        <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ paddingHorizontal: '25' }}>
                <View>
                    <Image  /></View>
                <Text style={{ fontWeight: 'bold', color: 'green', paddingTop: 400, paddingBottom: 20 }} >Login</Text>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: '8', marginBottom: '25', paddingLeft: 20 }}>
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
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

