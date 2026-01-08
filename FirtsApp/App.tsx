import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './GlobalStyles';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const Stack = createNativeStackNavigator();

function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={{ width: 250, height: 250 }} />
      <Text style={styles.heading}>Welcome To</Text>
      <Text style={styles.desc}>Create an account and access thousand of cool stuffs</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Text style={styles.buttonTitle}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.lable}>Do you have an account ?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Log In
        </Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Log In' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

