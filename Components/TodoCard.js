import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';

const TodoCard = ({todo}) => {

  return (
    <View style={[styles.TodoCard, {backgroundColor: todo.color}]}>
      <Text style={styles.todoTitle}>
        {todo.title.length > 25
          ? `${todo.title.substring(0, 25)}...`
          : todo.title}
      </Text>
      <Text style={styles.createdAt}>
        {moment(todo.createdAt).fromNow(true)} ago
      </Text>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  TodoCard: {
    height: 40,
    width: '95%',
    borderRadius: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 8,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  todoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#3b4775',
    marginLeft: 2,
    width: '78%',
  },
  createdAt: {
    marginLeft: 'auto',
    fontSize: 11,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 2,
  },
});
