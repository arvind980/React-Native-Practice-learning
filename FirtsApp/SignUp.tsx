
import style from './GlobalStyles'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

function SignUp({ navigation }: any) {
    return (
        <View style={style.container}>
            <Image source={require('./assets/logo.png')} style={{ width: 100, height: 100 }}></Image>
            <Text style={style.heading}>Sign Up Now</Text>
            <Text style={style.lable} >Please fill the details to sign up</Text>
            <TextInput style={style.textfield} placeholder='Please enter you name' />
            <TextInput style={style.textfield} placeholder='Please enter your email' />
            <TextInput style={style.textfield} placeholder='Please enter your password' />
            <Text style={style.link1} onPress={() => { navigation.navigate('ForgotPassword') }}>
                Forgot password?
            </Text>
            <TouchableOpacity style={style.button} activeOpacity={0.5} onPress={() => { navigation.replace('AppTabs'); }}>
                <Text style={style.buttonTitle} >Sign Up </Text>
            </TouchableOpacity>
            <Text style={style.lable} >Do't have an account? {" "}
                <Text style={style.link} onPress={() => navigation.goBack()}>
                    Log In
                </Text>
            </Text>
            <Text style={style.lable} >
                Or connect with
            </Text>

            <View style={style.socialContainer}>
                <TouchableOpacity style={[style.socialButton, { backgroundColor: '#1877F2' }]} onPress={() => { /* TODO: Facebook auth */ }}>
                    <Text style={style.socialText}>f</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.socialButton, { backgroundColor: '#1DA1F2' }]} onPress={() => { /* TODO: Facebook auth */ }}>
                    <Text style={style.socialText}>t</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.socialButton, { backgroundColor: '#0A66C2' }]} onPress={() => { /* TODO: Facebook auth */ }}>
                    <Text style={style.socialText}>in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignUp;

