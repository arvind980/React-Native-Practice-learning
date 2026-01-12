import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import apiManager from './src/API/APIManager';

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
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item: Todo) => item.id.toString()}
        renderItem={({ item }: { item: Todo }) => (
          <Text>{item.title}</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
