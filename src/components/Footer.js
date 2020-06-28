import React, {Component, useState} from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
// import {Actions} from 'react-native-router-flux';
import ButtonWithIcon from './ButtonWithIcon';
import Icon from 'react-native-vector-icons/FontAwesome';

class Footer extends Component {
  pressLogout() {
    this.props.logoutUser();
  }

  render() {
    const {footer} = styles;
    return (
      <View style={footer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="camera" size={20} color="black" />
          <Text>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="pencil" size={20} color="black" />
          <Text>Handwriting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="microphone" size={20} color="black" />
          <Text>Microphone</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    backgroundColor: 'yellow',
    height: 70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//     user: state.auth.user,
//   };
// };

export default Footer;
