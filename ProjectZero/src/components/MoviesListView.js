import React, {Component} from 'react';
import {FlatList, View, StatusBar, Text} from 'react-native';
import ListEntry from './ListEntry'
import {hardCodedData} from '../data/data.js'

export default class MoviesListView extends Component{
  static navigationOptions = {
    header:null
  };

  render(){
    return(
      <FlatList
        data={hardCodedData}
        renderItem={({item}) => <ListEntry movieKey={item.key}
                                          navigation={this.props.navigation}/>}
      />
    );
  }
}
