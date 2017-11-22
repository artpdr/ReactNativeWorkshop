import React, {Component} from 'react';
import MoviesListView from './src/components/MoviesListView';
import MovieDetails from './src/components/MovieDetails';
import {StackNavigator} from 'react-navigation';

const App = StackNavigator({
  MoviesList: {screen: MoviesListView},
  MovieDetails: {screen: MovieDetails}
});

export default App;
