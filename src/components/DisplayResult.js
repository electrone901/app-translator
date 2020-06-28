import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const DisplayResult = ({onTranslateMore}) => {
  const {inputArea, headerGroup, display_result, btn, btn_text} = styles;

  return (
    <View style={inputArea}>
      <Text style={display_result}>DisplayResult DisplayResult </Text>

      <View style={headerGroup}>
        <TouchableOpacity onPress={() => this.onLogin()}>
          <View style={btn}>
            <Text style={btn_text}>Save to list</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onTranslateMore}>
          <View style={btn}>
            <Text style={btn_text}>Translate more</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 11,
    width: 150,
  },
  btn_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  inputArea: {
    padding: 1,
    marginTop: 10,
  },
  input__label: {
    fontSize: 18,
    paddingLeft: 5,
  },
  display_result: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    // backgroundColor: '#696969',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    // color: 'white',
  },
  headerGroup: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default DisplayResult;
