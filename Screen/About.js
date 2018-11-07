import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Linking
} from "react-native";
import styles from '../style';


export default class AboutScreen extends Component {
    render() {
      //const emoji = Emoticons.parse('Made with [heart] by');
      return (
        <View style={styles.container}>
         <Text style={styles.title}>Developed & Designed By: </Text>
  
         <TouchableHighlight style={ styles.imageContainer }>
              <Image style={ styles.image } source={{ uri: 'https://avatars1.githubusercontent.com/u/23170854?s=400&v=4' }} />
         </TouchableHighlight> 
         <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/nmasnadithya')}>Adithya Narasinghe</Text>
  
         <TouchableHighlight style={ styles.imageContainer }>
              <Image style={ styles.image } source={{ uri: 'https://avatars1.githubusercontent.com/u/19805825?s=460&v=4' }} />
         </TouchableHighlight> 
         <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/bpdesilva')}>Buwaneka De Silva</Text>
        
  
         <TouchableHighlight style={ styles.imageContainer }>
              <Image style={ styles.image } source={{ uri: 'https://avatars1.githubusercontent.com/u/3047253?s=460&v=4' }} />
         </TouchableHighlight> 
         <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/tsuresh')}>Suresh Peris</Text>
  
         <TouchableHighlight style={ styles.imageContainer }>
              <Image style={ styles.image } source={{ uri: 'https://avatars0.githubusercontent.com/u/32621024?s=460&v=4' }} />
         </TouchableHighlight> 
         <Text style={styles.name}  onPress={() => Linking.openURL('https://github.com/bpdesilva')}>Thinura Kumarasinghe</Text>
  
        </View>
      );
    }
  }