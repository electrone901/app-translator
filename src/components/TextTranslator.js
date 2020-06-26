import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Button} from 'react-native-material-ui';

const Input = ({label, value, onChangeText}) => {
  const {inputArea, input__label, input__field} = styles;

  return (
    <View style={inputArea}>
      <Text style={input__label}>{label}</Text>
      <TextInput
        value={value}
        placeholder="Enter text"
        autoCorrect={false}
        onChangeText={onChangeText}
        clearButtonMode="while-editing"
        style={input__field}
        multiline={true}
        numberOfLines={10}
      />
      <Button raised primary text="Translate" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    padding: 1,
    marginTop: 10,
  },
  input__label: {
    fontSize: 18,
    paddingLeft: 5,
  },
  input__field: {
    height: 130,
    width: '100%',
    backgroundColor: '#dcdee0',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
  },
});

export default Input;
