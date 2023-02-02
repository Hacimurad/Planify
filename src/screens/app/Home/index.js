import  React  from  'react'
import { Text, View, ScrollView } from 'react-native'

import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon'
import Title from '../../../components/Title'
import styles from './styles'


const Home = ({navigation}) => {
return (
        <View style={styles.container}>
              <Header title="Home"/>  
              <ScrollView>
              <Title type='thin'>Daily Tasks:</Title>
              </ScrollView>
             
                <PlusIcon/>
        </View>
)
}

export default React.memo(Home)