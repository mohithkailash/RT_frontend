import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Makepost from "./Makepost";
import Account from "./Account";
import Home from "./Home";
import { Button } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}  options={{  headerShown: false }}/>
            <Tab.Screen name = "Makepost" component={Makepost}  options={{  headerShown: false }}/>
            <Tab.Screen name = "Account" component={Account}  options={{  headerShown: false}}/>
        </Tab.Navigator>
    )

}

export default Tabs;