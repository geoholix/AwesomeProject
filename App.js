import React, { Component } from 'react';
import {ScrollView, Text, View, Image, StyleSheet} from 'react-native';
import Laptop from './laptop.jpeg'

//normal function js
//function App() {
//  return <Text> Hello world!</Text>;
//}

//arow function js
//const App = () => {
//  return <Text> Halo dunia</Text>;
//};

//function dengan menggunakan class extends
//class App extends Component{
//  render() {
//    return <Text> Halooo lagi</Text>
//  }
//}

const App = () => {
  return <View style={{marginTop:100, backgroundColor:'#ecf0f1', padding:10, width:212, marginLeft:10,borderRadius:8}}>

    <Image
      source={Laptop}
      style={{width:190, height:100,borderRadius:8}}
    />
    <Text style={{marginTop:16, fontSize:14, fontWeight:'bold', marginLeft:5}}> ASUS ROG GL 533 VD</Text>
    <Text> Rp. 20.000.000</Text>
    <Text> Jakarta Selatan</Text>

  </View>
  /* 
  <ScrollView>
  <View>
    <Text> Halo dunia</Text>
    <Text> React-native</Text>
    <Name />
    </View>
    <Image
        source={{
          uri: 'https://akcdn.detik.net.id/visual/2020/06/02/09fb4d2c-e9d4-4949-b26d-969983c4bd54_169.jpeg?w=650'}}
          style={{width:300, height:300}}
      />
    <Image
        source={Laptop}
        style={{width:300, height:300}}
    />
  </ScrollView> */
};

const Name = () => {
  return<Text style={{fontSize:20}}>Shift Academy</Text>
}

export default App;
