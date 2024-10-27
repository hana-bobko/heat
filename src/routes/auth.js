import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/auth/sign-in";
const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
            <AuthStack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
        </AuthStack.Navigator>
    );
}
