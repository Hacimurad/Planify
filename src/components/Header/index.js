import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Header = ({title}) => {
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.openDrawer();
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Image
          style={styles.icon}
          source={require('../../assets/menu.png')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
        <View style={styles.icon}/>
    </View>
  );
}

export default React.memo(Header) ;