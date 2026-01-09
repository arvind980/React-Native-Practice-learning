import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./AppTabs";
import WelcomeScreen from "./WelcomeScreen";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ title: 'Log In' }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }} />
            <Stack.Screen name="AppTabs" options={{ headerShown: false }}>
                {() => <AppTabs />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default RootNavigator;