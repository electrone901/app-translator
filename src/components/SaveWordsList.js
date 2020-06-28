import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const SaveWordsList = ({list}) => {
  const {container, separator, linkContainer, description, title} = styles;
  return (
    <View style={container}>
      <Text style={title}>Saved words</Text>
      {list.map((word) => {
        return (
          <React.Fragment key={word.id}>
            <View style={separator} />
            <TouchableOpacity
              accessibilityRole={'button'}
              // onPress={() => }
              style={linkContainer}>
              <View style={description}>
                <Text>{word.wordEn}</Text>
                <Text>{word.traduction}</Text>
              </View>
              <Icon name="star" size={20} color="red" />
            </TouchableOpacity>
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: 'black',
  },
  separator: {
    backgroundColor: 'lightgrey',
    height: 1,
  },
});

export default SaveWordsList;
