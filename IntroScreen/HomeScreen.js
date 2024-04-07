import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, backgroundColor, Image, ImageBackground,  ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faBars, faBasketball, faCartShopping, faFaceGrinBeamSweat, faHamburger, faHandBackFist, faHome, faListCheck, faMobileScreenButton, faSearch, faXmarksLines, } from '@fortawesome/free-solid-svg-icons';
import { faCentercode, faEarlybirds, faShopify } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faCheckSquare, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { IconButton } from 'react-native-paper';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1, backgroundColor:'white' }}>
      
      <View style={{flex:1, flexDirection:"row", flexWrap:'wrap'}}>
    
<View style={{width:'50%', height:"50%", backgroundColor:'lightgreen', borderColor: '#ccc',borderWidth: 1}}><TouchableOpacity style={{
         paddingTop:50,
         paddingRight:100,
          alignContent: 'center',
          alignItems: 'center'
         
        }}>
       <FontAwesomeIcon icon={faBars} size={20} />
        </TouchableOpacity><Text style={{paddingTop:50,fontWeight:'bold'}}><FontAwesomeIcon icon={faShopify} color='red' />Shopping List:</Text>
        <Text style={{paddingTop:30}}><FontAwesomeIcon icon={faCheckSquare} />Bakery and Bread</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Pasta and rice</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Meat and Seafood</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Cereals and Junks</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Frozen Food</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Soups and Cannedgoods</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Veges</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Groceries</Text>
        <Text ><FontAwesomeIcon icon={faCheckSquare} />Weed</Text>
        </View>
<View style={{width:'50%', height:"50%", backgroundColor:'lightblue', borderColor: '#ccc',borderWidth: 1, alignContent:'center', alignItems:'center'}}><TouchableOpacity style={{
         paddingTop:200,
         alignItems:'center',
          alignItems: 'center'
        }}>
          <FontAwesomeIcon icon={faAdd}  size={30} />
        </TouchableOpacity><Text style={{paddingTop:50, fontWeight:'bold'}}>Add To Lists</Text></View>
<View style={{width:'50%', height:"50%", backgroundColor:'lightyellow', borderColor: '#ccc',borderWidth: 1}}><Text style={{paddingTop:50,fontWeight:'bold', paddingLeft:50}}>To Do Lists:</Text>
<Text style={{paddingTop:30}}><FontAwesomeIcon icon={faBasketball}color='brown' />Sport</Text>
<Text style={{paddingTop:30}}><FontAwesomeIcon icon={faFaceGrinBeamSweat}color='yellow' />Bakery and Bread</Text>
<Text style={{paddingTop:30}}><FontAwesomeIcon icon={faHamburger} />Eat</Text>
</View>
<View style={{width:'50%', height:"50%", backgroundColor:'lightpink', borderColor: '#ccc',borderWidth: 1, alignItems:'center'}}><TouchableOpacity style={{paddingTop:50,paddingRight:90, flexDirection:'row', paddingVertical:0}}><FontAwesomeIcon icon={faCartShopping} color='blue' size={30} /></TouchableOpacity><Text style={{fontWeight:'bold', paddingLeft:50, paddingBottom:30}}>Supermarket</Text>

</View>

</View>

    </SafeAreaView>
  );
}


