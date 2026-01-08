import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import styles from './GlobalStyles';


function ForgotPassword({ navigation }: any) {
    return <View style={styles.container1}>
        <Image source={require('./assets/logo.png')} style={{ width: 100, height: 100, marginTop: 100, alignContent: 'flex-start' }}></Image>
        <Text style={styles.heading}>Forgot Password</Text>
        <TextInput style={styles.textfield} placeholder='Please enter your email' />
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => { }}>
            <Text style={styles.buttonTitle} >Reset Password </Text>
        </TouchableOpacity>
        <Text style={styles.lable} >Remember your password? {" "}
            <Text style={styles.link} onPress={() => navigation.goBack()}>
                Log In
            </Text>
        </Text>
    </View>
}

export default ForgotPassword;