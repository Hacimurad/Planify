import  React  from  'react'
import { Text, View,Pressable,Image } from 'react-native'
import Categories from '../../../components/Categories'
import Input from '../../../components/Input'
import Title from '../../../components/Title'
import { categories } from '../../../constants/categories'
import styles from './styles'


const AddTask = ({navigation}) => {

const [selectedTags, setSelectedTags] = React.useState();
const handleBack = () => {
        navigation.goBack();
}     

return (
        <View style={styles.container}>
                <Pressable style={styles.back}  onPress={handleBack}>     
                <Image style={styles.image} source={require('../../../assets/back.png')}/>
                </Pressable>
                <Title type='thin'>Add New Task</Title>
                <Text style={styles.label}>Describe the task</Text>
                <Input outline placeholder='Type here...'/>
                <Text style={styles.label}>Type</Text>
                <Categories categories={categories} selectedCategory={selectedTags} onCategoryPress={setSelectedTags}/>
                <Text style={styles.label}>Deadline</Text>
        </View>   
)
}

export default React.memo(AddTask)