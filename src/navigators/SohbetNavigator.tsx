import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import SohbetScreen from "../screens/SohbetScreen";
import {Feather ,Entypo} from "@expo/vector-icons";

const Stack = createStackNavigator();

const SohbetNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='Sohbet' component={SohbetScreen}
            options={{
                headerStyle:{
                    backgroundColor:"#F1F1F1"
                },
                headerTitle:()=>(
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1,marginLeft:115,}}>
                    <Text style={{fontWeight:"bold", fontSize:15,}}>Sohbet - Hepsi</Text>
                    </View>
                ),
                headerRight:()=>(
                    <View style={{flexDirection:"row",gap:10,paddingRight:10}}>
                        <Feather name="sliders" size={24} color="#969696" />
                        <Entypo
                            name="dots-three-horizontal" size={24} color="#969696"
                        />
                    </View>
                )
            }}
        />
    </Stack.Navigator>
  )
}

export default SohbetNavigator