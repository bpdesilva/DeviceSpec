import React, { Component } from "react";

//Access Device Details
import { DeviceInfo } from 'react-native-device-info';

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


DeviceInfo.getIPAddress().then(ip => {
  var devip=ip;// "92.168.32.44"
});
// DeviceInfo.getBatteryLevel().then(batteryLevel => {
//   // 0.759999
// });
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
if(deviceLandscape==true){
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