import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { View,Text } from "react-native";
import HomeNavigator from "./HomeNavigator";
import {Foundation,Ionicons,MaterialCommunityIcons,AntDesign} from "@expo/vector-icons";
import BildirimNavigator from "./BildirimNavigator";
import MesajNavigator from "./MesajNavigator";
import IlanlarNavigator from "./IlanlarNavigator";

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
            <Tab.Screen 
            name="Anasayfa" 
            component={HomeNavigator}
            options={{
                tabBarIcon:({color})=>(
                    <Foundation name="home" size={24} color={color}/>
                )
            }}
            />
            <Tab.Screen
            component={BildirimNavigator}
                name="Bildirimler"
                options={{
                    tabBarIcon:({color})=>(
                        <View>
                            <Ionicons color={color} size={24} name="notifications"/>
                            <View style={{
                                position:"absolute",
                                top:-4,
                                right:-10,
                                width:16,
                                height:16,
                                borderRadius:8,backgroundColor:"#F24E61",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:12,color:"white"}}>
                                    2
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen
            component={MesajNavigator}
                name="Sohbet"
                options={{
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="message-processing" size={24} color={color}/>
                    )
                }}
            />
            <Tab.Screen
            component={IlanlarNavigator}
                name="İlanlarım"
                options={{
                    tabBarIcon:({color})=>(
                        <AntDesign size={24} color={color} name="appstore1"/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}


export default RootNavigation;