import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-material-ui';

const TextTranslator = ({value, onChangeText, onTranslateToggle, ref}) => {
  const {inputArea, input__field} = styles;

  return (
    <View style={inputArea}>
      <TextInput
        value={value}
        placeholder="Enter text"
        autoCorrect={false}
        onChangeText={onChangeText}
        clearButtonMode="while-editing"
        style={input__field}
        multiline={true}
        numberOfLines={10}
        ref={ref}
      />
      <Button onPress={onTranslateToggle} raised primary text="Translate" />
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
  headerGroup: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TextTranslator;
