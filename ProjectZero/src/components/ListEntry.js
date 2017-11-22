import React, {Component} from 'react';
import {StyleSheet, Image, TouchableHighlight, Alert, View, Text} from 'react-native';
import Dimensions from 'Dimensions';
import {hardCodedData} from '../data/data.js'

// Detect screen sizes
const screen = Dimensions.get('window');

export default class ListEntry extends Component{
  constructor(props){
    super(props);
    const key = props.movieKey;
    this.state = {movie: this._fetchMovie(key)};
  }

  _fetchMovie(key){
    for (let i=0; i < hardCodedData.length; i++)
      if(hardCodedData[i].key==key)
        return hardCodedData[i];
    return null;
  }

  render(){
    const navigate = this.props.navigation.navigate;
    return(
      <TouchableHighlight
        onPress={() => navigate('MovieDetails',
                      {movieKey: this.state.movie.key})}
        underlayColor='white'>
        <Image
          source={{uri: this.state.movie.uri}}
          style={styles.imageBackground}
          resizeMode='stretch'/>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  imageBackground: {
    height: screen.height / 2,          // Divide screen height by 2
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
  },
});
