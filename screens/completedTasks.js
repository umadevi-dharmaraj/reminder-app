import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Complete extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Completed Tasks</Text>
      </View>
    );
  }
}
