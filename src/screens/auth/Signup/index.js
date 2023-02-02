import React from 'react';
import {Alert, Linking, SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Title from '../../../components/Title/index';
import {PrivacyPolicy, TermsOfService} from '../../../constants/links';
import styles from './styles';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = React.useState(false);
  const [values, setValues] = React.useState({});

  const onCheckboxPress = () => setAgreed(!agreed);

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onValueChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };
  

  const onSignupPress = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please Enter First and Last Name');
      return;
    }

    if (values.password !== values.confirm_password) {
      Alert.alert('Passwords do not match');
      return;
    }
    if (!agreed) {
      Alert.alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        auth().currentUser.updateProfile({
          displayName: `${values.first_name} ${values.last_name}`,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <Title>Join the hub!</Title>
      <Input
        onChangeText={val => onValueChange(val, 'first_name')}
        placeholder="First Name"
      />
      <Input
        onChangeText={val => onValueChange(val, 'last_name')}
        placeholder="Last Name"
      />
      <Input
        onChangeText={val => onValueChange(val, 'email')}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        onChangeText={val => onValueChange(val, 'password')}
        placeholder="Password"
        secureTextEntry
      />
      <Input
        onChangeText={val => onValueChange(val, 'confirm_password')}
        placeholder="Confirm Password"
        secureTextEntry
      />

      <View style={styles.checkboxContainer}>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />
        <Text style={styles.checkboxText}>
          I agree to the{' '}
          <Text style={styles.link} onPress={() => onLinkPress(TermsOfService)}>
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={() => onLinkPress(PrivacyPolicy)}>
            Privacy Policy
          </Text>
        </Text>
      </View>

      <Button onPress={onSignupPress} type={'blue'}>
        Create account
      </Button>

      <Text style={styles.footerText}>
        Already registered?
        <Text onPress={() => navigation.navigate('Signin')} style={styles.link}>
          {' '}
          Sign in
        </Text>
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
