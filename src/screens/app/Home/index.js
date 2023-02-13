import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import styles from './styles';
import { setTasks } from '../../../store/tasks';
import StatusCard from '../../../components/StatusCard';
import moment from 'moment';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);
  
  const [counts, setCounts] = useState({});
  
  const dispatch = useDispatch();

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


    useEffect(() => {
      if (tasks?.length) {
        const highPriority = tasks?.filter(
          task => task?.selectedTags === 'urgent' || task?.selectedTags === 'important',
        );
        
        const today = moment(new Date()).format('YYYY-MM-DD');
        const dueDeadline = tasks?.filter(task=>
              {
                const deadline = task?.date.seconds * 1000;
                const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
                return  moment(deadlineFormatted).isBefore(today);
              }
          )

       
        const quickWin = tasks?.filter(task => task?.selectedTags === 'quick_task');
       
  
        setCounts({
          highPriority: highPriority?.length,
          dueDeadline: dueDeadline?.length,
          quickWin: quickWin?.length,
        });
      }
    }, [tasks]);

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
        <View style={styles.row}>
           <StatusCard label="High Priority" count={counts?.highPriority} />
          <StatusCard
            label="Due Deadline"
            type="error"
            count={counts?.dueDeadline}
          />
          <StatusCard label="Quick Win" count={counts?.quickWin} />
        </View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.title}>Check all my tasks</Text>
          <Text style={styles.subtitle}>
            See all tasks and filter them by categories you have selected when
            creating them
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <PlusIcon />
    </View>
  );
};

export default React.memo(Home);
