import React from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button/index';
import Input from '../../../components/Input';
import Title from '../../../components/Title/index';
import styles from './styles';

const Signin = ({navigation}) => {
  const [values, setValues] = React.useState({});

  const onValueChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSignupPress = () => {
    auth()
      .signInWithEmailAndPassword(
        values.email,
        values.password,
      )
      .then(() => {
        console.log('User  signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
                Alert.alert('That email address is already in use!');
        }else if (error.code === 'auth/invalid-email') {
                Alert.alert('That email address is invalid!');
        }else{
                Alert.alert(error.message)
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back</Title>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={val => onValueChange(val, 'email')}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={val => onValueChange(val, 'password')}
      />
      <Button onPress={onSignupPress}>Log in</Button>

      <Text style={styles.footerText}>
        Not Registered?{' '}
        <Text onPress={() => navigation.navigate('Signup')} style={styles.link}>
          {' '}
          Sign up now
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
