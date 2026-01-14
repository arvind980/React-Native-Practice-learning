import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import apiManager from './../APIManager';

interface Todo {
    id: number;
    title: string;
}

function Home() {

    const [todos, setTodos] = React.useState<Todo[]>([]);

    React.useEffect(() => {
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
        <SafeAreaView style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Text style={styles.todoItem}>{item.title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    todoItem: {
        fontSize: 17,
        marginVertical: 10,
        marginHorizontal: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});     