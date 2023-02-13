import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import getStyles from './styles';

const StatusCard = ({label,count,type}) => {
    const navigation = useNavigation();
    
    const styles = getStyles(type);

    const openDrawer = () => {
        navigation.navigate('Tasks');
    };
    
  return (
   
      <TouchableOpacity style={styles.container} onPress={openDrawer}>
            <Text style={styles.label} >{label}</Text>
            <Text style={styles.count} >{count}</Text>
      </TouchableOpacity>

  );
}

export default React.memo(StatusCard) ;