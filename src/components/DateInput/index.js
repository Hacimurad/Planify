import React from 'react';
import {Image, Text, TextInput, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import moment from 'moment';

const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = React.useState(false);

  const onDatePress = () => {
    setOpen(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.outline} onPress={onDatePress}>
        <Image
          resizeMode='contain'
          style={styles.icon}
          source={require('../../assets/calendar.png')}
        />
        <Text style={styles.text}>
          {moment(value).format('L') || 'Selected Date...'}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode='date'
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default React.memo(DateInput);
