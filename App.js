import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers/index';
import Header from './src/components/Header';
import LibraryList from './src/components/LibraryList';

// export default class App extends React.Component {
//   render() {
const App = () =>{
    return (
        <Provider store={createStore(reducers)}>
      <View style={styles.viewStyle}>
      <Header headerText={'Tech Stack'}/>
      <LibraryList/>
      </View>
        </Provider>
    );
  };
const styles={
    viewStyle:{
        flex:1
    }
}

export default App;
