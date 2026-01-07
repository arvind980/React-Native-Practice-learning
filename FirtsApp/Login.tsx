import React from 'react';
import styles from './GlobalStyles'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

function Login({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={{ width: 100, height: 100 }} />
            <Text style={styles.heading}>Log In</Text>
            <Text style={styles.lable}>Please login to continue using our app</Text>
            <TextInput style={styles.textfield} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.textfield} placeholder="Password" secureTextEntry={true} />
            <Text style={styles.link1} onPress={() => { navigation.navigate('ForgotPassword') }}>
                Forgot Password?
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {
                // TODO: handle login action
            }}>
                <Text style={styles.buttonTitle}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.lable}>Don't have an account?{" "}
                <Text style={styles.link} onPress={() => { navigation.navigate('SignUp') }}>
                    Sign Up
                </Text>
            </Text>
            <Text style={styles.lable} >
                Or connect with
            </Text>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1877F2' }]} onPress={() => { /* TODO: Facebook auth */ }}>
                    <Text style={styles.socialText}>f</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]} onPress={() => { /* TODO: Twitter auth */ }}>
                    <Text style={styles.socialText}>t</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#0A66C2' }]} onPress={() => { /* TODO: LinkedIn auth */ }}>
                    <Text style={styles.socialText}>in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;