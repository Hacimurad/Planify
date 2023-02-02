import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const PlusIcon = () => {
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.navigate('AddTask');
    };
  return (
   
      <TouchableOpacity style={styles.container} onPress={openDrawer}>
            <Text style={styles.plus} >+</Text>
      </TouchableOpacity>

  );
}

export default React.memo(PlusIcon) ;