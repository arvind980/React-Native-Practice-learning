import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles';

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

export default WelcomeScreen;