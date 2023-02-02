import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon'
import Title from '../../../components/Title'
import styles from './styles'


const Task = ({ navigation }) => {
        return (
                <View style={styles.container}>
                        <Header title="Tasks" />
                        <ScrollView>
                        <Title type='thin'>To do Tasks</Title>
                        </ScrollView>
                        <PlusIcon/>
                </View>
        )
}

export default React.memo(Task)