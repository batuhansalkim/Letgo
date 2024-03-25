import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen/index";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();



export default function HomeNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                
            }}
            />

            
        </Stack.Navigator>
    )
}  