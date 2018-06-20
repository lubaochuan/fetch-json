import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      screens: []
    }
  }

  async componentWillMount() {
    //const screens = await AsyncStorage.getItem('screens')
    //if(!screens) {
      try {
        //const response = await
        fetch('https://raw.githubusercontent.com/lubaochuan/wbcc/scale-back/data/screens.json').then(response => response.json())
        .then(data => this.setState({screens: data.screens}))
      } catch(e) {
        console.warn("fetch Error: ", error)
     }
  // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.screens)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
