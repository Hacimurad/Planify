import React, {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import styles from './styles';
import { setTasks } from '../../../store/tasks';

const Home = () => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);
  const dispatch = useDispatch();
  console.log('tasks :>> ', tasks);
  console.log('toUpdate :>> ', toUpdate);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        const tasksList = [];

        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'Tasks ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          tasksList.push({
            uid: documentSnapshot.id,
            ...(documentSnapshot.data() || {}),
          });
        });
        dispatch(setTasks(tasksList));
      });
  }, [user, dispatch, toUpdate]);

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
      </ScrollView>

      <PlusIcon />
    </View>
  );
};

export default React.memo(Home);
