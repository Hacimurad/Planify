import React from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';


import Checkbox from '../../../components/Checkbox';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import styles from './styles';
import { setToUpdate } from '../../../store/tasks';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';

const Task = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.data);
  const [selectedTags, setSelectedTags] = React.useState('all');
  const [filteredTasks, setFilteredTasks] = React.useState([]);

  React.useEffect(() => {
    if (selectedTags && selectedTags !== 'all') {
      setFilteredTasks(tasks.filter(tasks => tasks.selectedTags === selectedTags));
    } else {
      setFilteredTasks(tasks);
    }
  }, [selectedTags, tasks]);

  const onTaskUpdate = item => {
        firestore()
          .collection('Tasks')
          .doc(item.uid)
          .update({
            checked: !item.checked,
          })
          .then(() => {
            dispatch(setToUpdate());
          });
        };

  const renderTask = ({item}) => {
    return (
      <View style={styles.taskContainer}>

        <Checkbox checked={item.checked} onPress={()=>onTaskUpdate(item)}/>

        <Text style={[styles.taskTitle,item.checked ? styles.checked : {}]}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Tasks" />

      <FlatList
        style={{marginVertical: 25,}}
        ListHeaderComponent={
          <View style={{marginBottom:20}}>
        <Title type="thin">To do Tasks</Title>
        <Categories
        categories={[{label:'All',value:'all'},...categories]}
        selectedCategory={selectedTags}
        onCategoryPress={setSelectedTags}
      />
          </View>}
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={item => item.uid}
      />

      <PlusIcon />
    </View>
  );
};

export default React.memo(Task);
