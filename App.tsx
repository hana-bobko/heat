import React, { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppRoutes from "./src/routes/app";
import AuthRoutes from "./src/routes/auth";
const RootStack = createNativeStackNavigator();
function App(): React.JSX.Element {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isDarkMode = useColorScheme() === "dark";
    useEffect(() => {
        setIsAuthenticated(false);
    }, [0]);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    console.log(isAuthenticated, "IS AUTHENTICATEDå");
    return (
        <NavigationContainer>
            {isAuthenticated ? <RootStack.Screen name="AppRoutes" component={AppRoutes} /> : <RootStack.Screen name="AuthRoutes" component={AuthRoutes} />}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
    },
    highlight: {
        fontWeight: "700",
    },
});

export default App;
