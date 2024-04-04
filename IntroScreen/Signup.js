import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Signup() {
    <>
    return (

        <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ paddingHorizontal: '25' }}>
                <View>
                    <Image  /></View>
                <Text style={{ fontWeight: 'bold', color: 'green', paddingTop: 400, paddingBottom: 20 }} >Sign up</Text>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: '8', marginBottom: '25', paddingLeft: 20 }}>
                    <TextInput placeholder='Email id' keyboardType='email-address' style={{ paddingVertical: '9', flex: 1 }}></TextInput>

                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: '8', marginBottom: '25', paddingLeft: 20 }}>
                    <TextInput placeholder='Full name'  style={{ paddingVertical: '9', flex: 1 }}></TextInput>

                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: '8', marginBottom: '25', paddingLeft: 20 }}>
                    <TextInput placeholder='Phone no' style={{ paddingVertical: '9', flex: 1 }}></TextInput>

                </View>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: '8', marginBottom: '25', paddingLeft: 20, padding: 5 }}>
                    <TextInput placeholder='password' secureTextEntry={true} style={{ paddingVertical: '0', flex: 1 }}></TextInput>
                </View>

<Button></Button>
                <Text style={{ textAlign: 'center', color: 'green', padding: 5 }}>or Signup with..</Text>
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











       
    )
    </>
}

