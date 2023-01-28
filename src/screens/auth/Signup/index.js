import React from 'react';
import {Linking, SafeAreaView,Text, View} from 'react-native';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input'
import Title from '../../../components/Title/index'
import { PrivacyPolicy, TermsOfService } from '../../../constants/links';
import styles from './styles';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = React.useState(false);
  const onCheckboxPress = () => setAgreed(!agreed);

  const onLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email"  keyboardType='email-address' />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />

      <View style={styles.checkboxContainer}>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />
        <Text style={styles.checkboxText}>
          I agree to the{' '}
          <Text style={styles.link} onPress={()=>onLinkPress(TermsOfService)}>Terms of Service</Text> and{' '}
          <Text style={styles.link} onPress={()=>onLinkPress(PrivacyPolicy)} >Privacy Policy</Text>
        </Text>
      </View>

      <Button type={'blue'}>Create account</Button>

      <Text style={styles.footerText}>
          Already registered?
        <Text onPress={() => navigation.navigate('Signin')} style={styles.link}>  Sign in
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
