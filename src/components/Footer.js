import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-material-ui';
import {Card} from 'react-native-material-ui';

class Footer extends Component {
  render() {
    return (
      <View>
        <Text>Footer Footer Footer</Text>
        <Card>
          <Text>Hello world!</Text>
        </Card>
        <Button primary text="Primary" />
        <Button accent text="Accent" />
        <Button raised primary text="Primary" />
        <Button disabled text="Disabled" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Footer;
