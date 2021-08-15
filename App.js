import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';

export default function App() {

  const [todos,setTodos] = useState([
    {text:'Drink Coffee', key:'1'},
    {text:'Create an App', key:'2'},
    {text:'Play PS4', key:'3'}
  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key!=key)
    })
  }

  const submitHandler = (text) =>{
    setTodos((prevTodos)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem = {({item})=>(
                <TodoItem 
                item={item}
                pressHandler={pressHandler} 
                />
              )
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
