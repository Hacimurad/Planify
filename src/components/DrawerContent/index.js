import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import auth from '@react-native-firebase/auth';
  import React from 'react';
import {Text,StyleSheet,Linking} from 'react-native';
import { PrivacyPolicy, TermsOfService } from '../../constants/links';


  
  function DrawerContent({navigation, ...props}) {

      const logout = () => {
          auth()
          .signOut()
          .then(() => console.log('User signed out!'))
      }


    return (
      <DrawerContentScrollView {...props}>
         <Text style={styles.link}  onPress={()=>navigation.navigate('Home')}>Home</Text>
         <Text style={styles.link} onPress={()=>navigation.navigate('Tasks')}>Tasks</Text>
         <Text style={styles.link} onPress={()=>Linking.openURL(PrivacyPolicy)}>Privacy Policy</Text>
         <Text style={styles.link}onPress={()=>Linking.openURL(TermsOfService)}>Terms and Conditions</Text>
        <Text style={styles.link} onPress={logout}>Log Out</Text>
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    link: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
        margin: 8,
        marginHorizontal: 16,
    }
  })

export default React.memo(DrawerContent) ;