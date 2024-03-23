import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { View,Text } from "react-native";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

function RootNavigation(){
    return(
        <Tab.Navigator 
            initialRouteName="Anasayfa"
            screenOptions={{
                tabBarHideOnKeyboard:true,
                tabBarShowLabel:false,
                tabBarActiveTintColor:"#F24E61",
                tabBarInactiveTintColor:"#959595",
                headerShown:false,
                tabBarStyle:{
                    height:80,
                }
            }}
        >
            <Tab.Screen name="Anasayfa" component={HomeNavigator}/>
        </Tab.Navigator>
    )
}


export default RootNavigation;