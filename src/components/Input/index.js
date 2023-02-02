import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({outline,...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.midGray}
      style={[styles.input, outline && styles.outline]}
      {...props}
    />
  );
};

export default React.memo(Input);
