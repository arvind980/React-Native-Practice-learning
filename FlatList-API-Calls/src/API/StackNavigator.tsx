import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetailsScreen"
                component={Details}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={tabNavigatorScreenOptions} >
            <Tab.Screen
                name="Home" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Text style={{ fontSize: size, color }}>🏠</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile" component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Text style={{ fontSize: size, color }}>👤</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function StackNavigator() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </Provider>
    );
};


const tabNavigatorScreenOptions = {
    tabBarActiveTintColor: '#2196F3',
    tabBarInactiveTintColor: '#999',
    tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingBottom: 8,
        paddingTop: 8,
        height: 60,
    },
    headerShown: false,
};