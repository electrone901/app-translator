import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button, Icon} from 'react-native-material-ui';
import switchImg from '../images/switch.png';

const HeaderApp = () => {
  return (
    <View style={styles.headerGroup}>
      <Button primary text="English" />
      <Image source={switchImg} style={styles.user__image} />
      <Button primary text="Spanish" />
    </View>
  );
};
const styles = StyleSheet.create({
  headerGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  user__image: {
    width: 30,
    height: 30,
  },
});

export default HeaderApp;
