import React, {Component} from 'react';
import {StyleSheet, Image, TouchableHighlight, Alert, View} from 'react-native';
import Dimensions from 'Dimensions';
import {hardCodedData} from '../data/data.js'

// Detect screen sizes
const screen = Dimensions.get('window');

export default class ListEntry extends Component{
  _fetchMovie(key){
    for (let i=0; i < hardCodedData.length; i++)
      if(hardCodedData[i].key==key)
        return hardCodedData[i];
    return null;
  }

}

const styles = StyleSheet.create({
  imageBackground: {
    height: screen.height / 2,          // Divide screen height by 2
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
  },
});
