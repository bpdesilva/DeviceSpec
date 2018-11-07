import React, { Component } from "react";
import Routes from "./Routes";

export default class App extends Component{
  render() {
    return(
      <Routes/>
    );
  }
};

// import React, { Component } from "react";

// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableHighlight,
//   Image,
//   Linking
// } from "react-native";

// //Material Tab Bar
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// //Platform Specific Icons
// import Icon from 'react-native-vector-icons/Ionicons';
// //Access Device Details
// import DeviceInfo from 'react-native-device-info';

// // import Routes from "./Routes";

// //List of Details
// const manufacturer = DeviceInfo.getManufacturer();
// const brand = DeviceInfo.getBrand();
// const model = DeviceInfo.getModel();
// const systemName = DeviceInfo.getSystemName();
// const systemVersion = DeviceInfo.getSystemVersion();
// const serialNumber = DeviceInfo.getSerialNumber();
// const carrier = DeviceInfo.getCarrier();
// const phoneNumber = DeviceInfo.getPhoneNumber();
// const deviceCountry = DeviceInfo.getDeviceCountry(); 
// const deviceId = DeviceInfo.getDeviceId();
// const deviceLocale = DeviceInfo.getDeviceLocale();
// const deviceName = DeviceInfo.getDeviceName();
// const storageSize = DeviceInfo.getTotalDiskCapacity();
// const freeDiskStorage = DeviceInfo.getFreeDiskStorage();
// const buildNumber = DeviceInfo.getBuildNumber();
// const is24Hour = DeviceInfo.is24Hour();

// let H24;
// if(is24Hour==true){
//   H24 ="24 Hour Format";
// } else{
//   H24="12 Hour Format";
// }
// // DeviceInfo.isAirPlaneMode().then(airPlaneModeOn => {
// //   // false
// // });
// // DeviceInfo.getMACAddress().then(mac => {
// //   // "E5:12:D8:E5:69:97"
// // });
// DeviceInfo.getIPAddress().then(ip => {
//   var devip=ip;// "92.168.32.44"
// });
// // DeviceInfo.getBatteryLevel().then(batteryLevel => {
// //   // 0.759999
// // });
// // const isEmulator = DeviceInfo.isEmulator(); // false
// // DeviceInfo.isPinOrFingerprintSet()(isPinOrFingerprintSet => {
// //   if (!isPinOrFingerprintSet) {
// //     // ...
// //   }
// // });
// const isTablet = DeviceInfo.isTablet(); // true
// let Tablet;
// if (isTablet==true){
//   Tablet="This Device is a Tablet";
// }else{
//   Tablet="This Device is not a Tablet";
// }
// const isLandscape = DeviceInfo.isLandscape();// true
// let deviceLandscape;
// if(isLandscape==true){
//   deviceLandscape="This Device is in Landscape Mode";
// }else{
//   deviceLandscape="This Device is not in Landscape Mode";
// }
// const hasNotch = DeviceInfo.hasNotch(); // true
// let notch;
// if(hasNotch==true){
//   notch="This Device has a notch";
// }else{
//   notch="This Device has no notch";
// }

// // export default class App extends Component{
// //   render() {
// //     return(
// //       <Routes/>
// //     );
// //   }
// // };

// //Home Screen
// class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {title: 'Manufacturer', key: manufacturer},
//             {title: 'Model', key: model},
//             {title: 'Brand',key: brand},
//             {title: 'System Version' , key: systemVersion},
//             {title: 'System Name', key: systemName},
//             {title: 'Serial Number', key: serialNumber},
//             {title: 'Carrier', key: carrier},
//             {title: 'Phone Number', key: phoneNumber},
//             {title: 'Device Country', key: deviceCountry},
//             {title: 'Device Id', key: deviceId},
//             {title: 'Device Locale', key: deviceLocale},
//             {title: 'Device Name', key: deviceName},
//             {title: 'Storage Size', key: storageSize},
//             {title: 'Free Storage', key: freeDiskStorage},
//             {title: 'Build Number', key: buildNumber},
//             {title: '24 Hour Clock Format', key: H24},
//             {title: 'Is a Tablet', key: Tablet},
//             {title: 'Landscape', key: deviceLandscape},
//             {title: 'Has a notch', key: notch},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.title} | {item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// //Settings Screen
// class AboutScreen extends Component {
//   render() {
//     //const emoji = Emoticons.parse('Made with [heart] by');
//     return (
//       <View style={styles.container}>
//        <Text style={styles.title}>Developed & Designed By: </Text>

//        <TouchableHighlight style={ styles.imageContainer }>
//             <Image style={ styles.image } source={{ uri: 'https://avatars1.githubusercontent.com/u/23170854?s=400&v=4' }} />
//        </TouchableHighlight> 
//        <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/nmasnadithya')}>Adithya Narasinghe</Text>

//        <TouchableHighlight style={ styles.imageContainer }>
//             <Image style={ styles.image } source={{ uri: 'https://avatars1.githubusercontent.com/u/19805825?s=460&v=4' }} />
//        </TouchableHighlight> 
//        <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/bpdesilva')}>Buwaneka De Silva</Text>
      

//        <TouchableHighlight style={ styles.imageContainer }>
//             <Image style={ styles.image } source={{ uri: 'https://avatars1.githubusercontent.com/u/3047253?s=460&v=4' }} />
//        </TouchableHighlight> 
//        <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/tsuresh')}>Suresh Peris</Text>

//        <TouchableHighlight style={ styles.imageContainer }>
//             <Image style={ styles.image } source={{ uri: 'https://avatars0.githubusercontent.com/u/32621024?s=460&v=4' }} />
//        </TouchableHighlight> 
//        <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/bpdesilva')}>Thinura Kumarasinghe</Text>

//       </View>
//     );
//   }
// }

// //Create bottom Tabs
// export default createMaterialBottomTabNavigator({
//   Home: {
//     screen: HomeScreen, //Screen name
//     navigationOptions: {
//       tabBarLabel: 'Home', // Tab Label
//       tabBarIcon: () => (
//         //Platform specific code for icons
//         <Icon name="ios-home" color={'white'} size={24} />
//       )
//     }
//   },
//   About: {
//     screen: AboutScreen,//Screen name
//     navigationOptions: {
//       tabBarLabel: 'About', // Tab Label
//       tabBarIcon: () => (
//         //Platform specific code for icons
//         <Icon name="ios-settings" color={'white'} size={24} />
//       )
//     }
//   }
// }, {
//     initialRouteName: 'Home',
//     activeTintColor: '#717D7E',
//     swipeEnabled: true,
//     shifting: true
//   })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: 'center',
//    },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//   title:{
//     fontSize: 18,
//     fontWeight: "bold",
//     paddingBottom: 8
//   },
//   name:{
//     paddingTop: 4,
//     fontSize: 16,
//     fontWeight: "bold",
//     paddingBottom : 10
//   },
//   imageContainer: {
//     height:128,
//     width: 128,
//     borderRadius: 64
//   },
//   image: {
//     height:128,
//     width: 128,
//     borderRadius: 64
//   },
// });