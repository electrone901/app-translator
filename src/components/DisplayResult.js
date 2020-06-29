import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DisplayResult = ({
  onTranslateMore,
  translatedText,
  saveWord,
  inputText,
}) => {
  const {
    inputArea,
    headerGroup,
    original_text,
    btn,
    btn_text,
    result_box,
    translated,
    down_arrow,
  } = styles;

  return (
    <View style={inputArea}>
      <View style={result_box}>
        <Text style={original_text}> {inputText} </Text>
        <Image style={down_arrow} source={require('../images/downArrow.jpg')} />
        <Text style={translated}>
          {' '}
          {translatedText} <Icon name="check" size={20} color="blue" />
        </Text>
      </View>

      <View style={headerGroup}>
        <TouchableOpacity onPress={saveWord}>
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
  result_box: {
    backgroundColor: 'white',
    height: 230,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  original_text: {
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
  },
  translated: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  down_arrow: {
    width: 40,
    height: 60,
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
