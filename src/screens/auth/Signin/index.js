import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Button from '../../../components/Button/index'
import Input from '../../../components/Input'
import Title from '../../../components/Title/index'
import styles from './styles'


const Signin = ({navigation}) => {
        return (
                        <SafeAreaView style={styles.container}>
                                <Title>Welcome Back</Title>
                                <Input placeholder="Email"  keyboardType='email-address' />
                                <Input placeholder="Password" secureTextEntry />
                                <Button>Log in</Button>

                                <Text style={styles.footerText}>
                                     Not Registered? <Text onPress={()=>navigation.navigate('Signup')} style={styles.link}> Sign up now</Text>
                                </Text>
                        </SafeAreaView>   
        )
}

export default React.memo(Signin)