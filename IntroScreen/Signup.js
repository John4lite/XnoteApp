import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Button,  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Signup() {
    return (
        <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ paddingHorizontal: '25' }}>
                <Text style={{ fontWeight: '900', color: 'green', paddingBottom: 50, textAlign: 'center' }}>Register !</Text>
                <Text style={{ fontWeight: '100', color: 'green', paddingBottom: 1, textAlign: 'center' }}>Signup using...</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 50 }}>

                        <TouchableOpacity><FontAwesomeIcon icon={faGoogle} /></TouchableOpacity>

                        <TouchableOpacity><FontAwesomeIcon icon={faTwitter} /></TouchableOpacity>

                        <TouchableOpacity><FontAwesomeIcon icon={faInstagram} /></TouchableOpacity>
                    </View>
                    <Text style={{ fontWeight: '100', color: 'green', paddingBottom: 1, textAlign: 'center' }} >or with</Text>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingTop: 1, marginBottom: '25', paddingLeft: 20, }}>
                    <TextInput placeholder='Email id' keyboardType='email-address' style={{ paddingVertical: '9', flex: 1 }}></TextInput>

                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingTop: 1, marginBottom: '25', paddingLeft: 20, }}>
                    <TextInput placeholder='Full name' keyboardType='name-phone-pad' style={{ paddingVertical: '9', flex: 1 }}></TextInput>

                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingTop: 1, marginBottom: '25', paddingLeft: 20, }}>
                    <TextInput placeholder='Phone no' keyboardType='number-pad' style={{ paddingVertical: '9', flex: 1 }}></TextInput>

                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingTop: 1, marginBottom: '25', paddingLeft: 20, padding: 5 }}>
                    <TextInput placeholder='password' secureTextEntry={true} style={{ paddingVertical: '0', flex: 1 }}></TextInput>

                </View>
                <View style={{paddingTop:30}}>
                <TouchableOpacity style={{
backgroundColor:'green',
padding: 20,
borderRadius: 50,
marginBottom: 5,

alignContent:'center'}}>
<Text style={{textAlign:'center', fontWeight:'800'}}>Sign up</Text>



                </TouchableOpacity>
                </View>
                <Text style={{textAlign:'center', paddingTop: 100, color:'green'}}>X-Note</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}


