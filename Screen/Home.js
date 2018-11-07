import React, { Component } from "react";
import {
  View,
  Text,
  FlatList
} from "react-native";

import styles from '../style';
//Access Device Details
import DeviceInfo  from 'react-native-device-info';

//List of Details
 const manufacturer = DeviceInfo.getManufacturer();
 const brand = DeviceInfo.getBrand();
 const model = DeviceInfo.getModel();
 const systemName = DeviceInfo.getSystemName();
 const systemVersion = DeviceInfo.getSystemVersion();
 const serialNumber = DeviceInfo.getSerialNumber();
 const carrier = DeviceInfo.getCarrier();
 const phoneNumber = DeviceInfo.getPhoneNumber();
 const deviceCountry = DeviceInfo.getDeviceCountry(); 
 const deviceId = DeviceInfo.getDeviceId();
 const deviceLocale = DeviceInfo.getDeviceLocale();
 const deviceName = DeviceInfo.getDeviceName();
 const storageSize = DeviceInfo.getTotalDiskCapacity();
 const freeDiskStorage = DeviceInfo.getFreeDiskStorage();
 const buildNumber = DeviceInfo.getBuildNumber();
 const is24Hour = DeviceInfo.is24Hour();
 const isTablet = DeviceInfo.isTablet(); // true
 const isLandscape = DeviceInfo.isLandscape();// true
 const hasNotch = DeviceInfo.hasNotch(); // true



 let H24;
if(is24Hour==true){
  H24 ="24 Hour Format";
  
} else{
  H24="12 Hour Format";
}
// DeviceInfo.isAirPlaneMode().then(airPlaneModeOn => {
//   // false
// });
// DeviceInfo.getMACAddress().then(mac => {
//   // "E5:12:D8:E5:69:97"
// });

var devip;
DeviceInfo.getIPAddress().then(ip => {
   devip=ip;// "92.168.32.44"
});

var devBattery;
DeviceInfo.getBatteryLevel().then(batteryLevel => {
   var devBatteryLevel=batteryLevel;// 0.759999
   devBattery = devBatteryLevel.valueOf();
});
// const isEmulator = DeviceInfo.isEmulator(); // false
// DeviceInfo.isPinOrFingerprintSet()(isPinOrFingerprintSet => {
//   if (!isPinOrFingerprintSet) {
//     // ...
//   }
// });


 let Tablet;
if (isTablet==true){
  Tablet="This Device is a Tablet";
}else{
  Tablet="This Device is not a Tablet";
}


 let deviceLandscape;
if(isLandscape==true){
  deviceLandscape="This Device is in Landscape Mode";
}else{
  deviceLandscape="This Device is not in Landscape Mode";
}


let notch;
if(hasNotch==true){
  notch="This Device has a notch";
}else{
  notch="This Device has no notch";
}
export default class HomeScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <FlatList
            data={[
                {title: 'Battery Level', key:devBattery},
                {title: 'Device IP', key:devip},
                {title: 'Manufacturer', key:manufacturer},
                {title: 'Model', key: model},
                {title: 'Brand',key: brand},
                {title: 'System Version' , key: systemVersion},
                {title: 'System Name', key: systemName},
                {title: 'Serial Number', key: serialNumber},
                {title: 'Carrier', key: carrier},
                {title: 'Phone Number', key: phoneNumber,},
                {title: 'Device Country', key: deviceCountry},
                {title: 'Device Id', key: deviceId},
                {title: 'Device Locale', key: deviceLocale},
                {title: 'Device Name', key: deviceName},
                {title: 'Storage Size', key: storageSize},
                {title: 'Free Storage', key: freeDiskStorage},
                {title: 'Build Number', key: buildNumber},
                {title: '24 Hour Clock Format', key: H24},
                {title: 'Is a Tablet', key: Tablet},
                {title: 'Landscape', key: deviceLandscape},
                {title: 'Has a notch', key: notch},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.title} | {item.key}</Text>}
          />
        </View>
      );
    }
  }