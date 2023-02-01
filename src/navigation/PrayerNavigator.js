import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrayerListScreen, PrayerScreen } from "../screens";
import { Header } from "../components";

export default function ExamenNavigator() {
    const PrayerStack = createNativeStackNavigator();

    return (
        <PrayerStack.Navigator
            screenOptions={{
                header: (props) => <Header props={props} />,
            }}
        >
            <PrayerStack.Screen
                name="PrayersList"
                component={PrayerListScreen}
            />
            <PrayerStack.Screen name="Prayer" component={PrayerScreen} />
        </PrayerStack.Navigator>
    );
}