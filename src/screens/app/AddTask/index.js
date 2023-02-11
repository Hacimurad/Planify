import React from 'react';
import {Alert, Text, View, Pressable, Image,ActivityIndicator,ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector} from 'react-redux';

import Button from '../../../components/Button';
import Categories from '../../../components/Categories';
import DateInput from '../../../components/DateInput';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import {categories} from '../../../constants/categories';
import styles from './styles';
import moment from 'moment';
import { setToUpdate } from '../../../store/tasks';

const AddTask = ({navigation}) => {
  const user = useSelector(state => state.user.data)
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState();
  const [date, setDate] = React.useState(new Date());
  const [loading, setLoading] = React.useState(false);

  const handleBack = () => {
    navigation.goBack();
  };
  const onSubmit = () => {
        const today = moment(new Date()).format('YYYY-MM-DD');
        const deadlineFormatted = moment(date).format('YYYY-MM-DD');

    if (!title) {
      Alert.alert('Please enter a title');
      return;
    }
    if (moment(deadlineFormatted).isBefore(today)) {
      Alert.alert('Please enter a valid date');
      return;
    }
setLoading(true);
  firestore()
  .collection('Tasks')
  .add({
    title,
    date,
    selectedTags,
    checked: false,
    userId: user?.uid,
  })
  .then(() => {
    setLoading(false);
    dispatch( setToUpdate());
    navigation.navigate('Tasks');
    setTitle('');
    setDate(new Date());
    setSelectedTags(null);
  })
  .catch(e => {
    console.log('error when adding task :>> ', e);
    setLoading(false);
    Alert.alert(e.message);
  });

  };

  return (
    <View style={styles.container}>
     

     
      <Pressable style={styles.back} onPress={handleBack}>
        <Image
          style={styles.image}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
      <ScrollView>
      <Title type="thin">Add New Task</Title>
      <Text style={styles.label}>Describe the task</Text>
      <Input
        value={title}
        onChangeText={setTitle}
        outline
        placeholder="Type here..."
      />
      <Text style={styles.label}>Type</Text>
      <Categories
        categories={categories}
        selectedCategory={selectedTags}
        onCategoryPress={setSelectedTags}
      />
      <Text style={styles.label}>Deadline</Text>
      <DateInput value={date} onChange={setDate} />
   {loading?(
    <ActivityIndicator/>
   ): (
    <Button style={styles.button} type="blue" onPress={onSubmit}>
    Add New Task
  </Button>
   )}
      </ScrollView>
    </View>
  );
};

export default React.memo(AddTask);
