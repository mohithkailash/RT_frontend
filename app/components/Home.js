import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Postlists from './Postlists';
import Fullpost from './Fullpost';

const Stack = createStackNavigator();

export default function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Postlists"
                component={Postlists}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Fullpost"
                component={Fullpost}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}