import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Button, Icon} from 'react-native-material-ui';

const HeaderApp = () => {
  const [translateToggle, setTranslateToggle] = useState(true);
  return (
    <View style={styles.headerGroup}>
      <Button primary text={translateToggle ? 'English' : 'Spanish'} />
      <TouchableHighlight onPress={() => setTranslateToggle(!translateToggle)}>
        <Image
          style={styles.user__image}
          source={require('../images/switch.png')}
        />
      </TouchableHighlight>
      <Button primary text={translateToggle ? 'Spanish' : 'English'} />
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
