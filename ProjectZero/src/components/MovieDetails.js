import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Button, Alert, TextInput} from 'react-native';
import Dimensions from 'Dimensions';
import {hardCodedData} from '../data/data.js'

// Detect screen sizes
const screen = Dimensions.get('window');


export default class MovieDetails extends Component{
  static navigationOptions = {
    header:null
  };

  constructor(props){
    super(props);
    const key = props.navigation.state.params.movieKey;
    this.state = {movie: this._fetchMovie(key)};
  }

  _fetchMovie(key){
    for (let i=0; i < hardCodedData.length; i++)
      if(hardCodedData[i].key==key)
        return hardCodedData[i];
    return null;
  }

  render(){
    const goBack = this.props.navigation.goBack;
    return (
      <ScrollView>
        <Image
          source={{uri: this.state.movie.uri}}
          style={styles.img}
          resizeMode='stretch'
          />
        <Text style={styles.movieTitle}>{this.state.movie.name}</Text>
        <Text style={styles.header}>Storyline:</Text>
        <Text>{this.state.movie.storyline}</Text>
        <Button onPress={()=>goBack()}
                title='Go back'
                color='black'/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: screen.height/1.33, //approximately 3/4 of the screen
  },
  movieTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
  header: {
    padding: 10,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    padding: 10,
    paddingTop: 5,
    textAlign: 'justify',
  }
});
