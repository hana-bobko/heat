import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/app/home";
const Tab = createBottomTabNavigator();

export default function AppRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            {/*       <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}
