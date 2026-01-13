import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import apiManager from './src/API/APIManager';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
interface Todo {
  id: number;
  title: string;
}

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await apiManager.getTodos();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    loadTodos();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} >
        <FlatList
          data={todos}
          keyExtractor={(item: Todo) => item.id.toString()}
          renderItem={({ item }: { item: Todo }) => (
            <Text style={styles.todoItem}>{item.title}</Text>
          )}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    //marginVertical: 50,
  },
  todoItem: {
    fontSize: 17,
    marginVertical: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});


