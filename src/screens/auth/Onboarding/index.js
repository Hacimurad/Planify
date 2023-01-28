import  React  from  'react'
import { Image, Text, View } from 'react-native'
import Button from '../../../components/Button/index'
import styles from './styles'


const Onboarding = ({navigation}) => {
return (
        <View style={styles.container}>
                <Image style={styles.image} source={require('../../../assets/onboarding.png')}  />

                <View style={styles.content}>
                        <Text style={styles.title}>Best task management app</Text>
                        <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity</Text>
                        <Button onPress={()=>navigation.navigate('Signin')}>Log in</Button>
                        <Button onPress={()=>navigation.navigate('Signup')} type={'blue'}>Get started</Button>
                </View>
        </View>   
)
}

export default React.memo(Onboarding)