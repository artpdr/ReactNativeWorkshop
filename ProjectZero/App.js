import React, {Component} from 'react';
import MoviesListView from './src/components/MoviesListView';
import MovieDetails from './src/components/MovieDetails';
import {StackNavigator} from 'react-navigation';

export default class App extends Component{
    render(){
      return(
        <MovieDetails />
      );
    }
}
