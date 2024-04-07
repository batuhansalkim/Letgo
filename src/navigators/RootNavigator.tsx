import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { View,Text,TouchableOpacity } from "react-native";
import HomeNavigator from "./HomeNavigator";
import {Foundation,Ionicons,MaterialCommunityIcons,AntDesign,FontAwesome} from "@expo/vector-icons";
import BildirimNavigator from "./BildirimNavigator";
import MesajNavigator from "./MesajNavigator";
import IlanlarNavigator from "./IlanlarNavigator";
import PostNavigator from "./PostNavigator";
import SohbetNavigator from "./SohbetNavigator";

const Tab = createBottomTabNavigator();


function RootNavigation(){
    
    const CustomTabBarButton=({children})=>{
        return(
            <TouchableOpacity style={{
                width:70,
                height:70,
                backgroundColor:"#F23F5A",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:35,
                borderWidth:5,
                borderColor:"white",
                marginTop:-18,
                
            }}>
                <FontAwesome name="camera" size={20} color="white"/>
                <Text style={{color:"white",marginTop:2,fontWeight:"600"}}>Sat</Text>
            </TouchableOpacity>
        )
    }

    return(
        <Tab.Navigator 
            initialRouteName="Anasayfa"
            screenOptions={{
                tabBarHideOnKeyboard:true,
                tabBarShowLabel:true,
                tabBarActiveTintColor:"#F24E61",
                tabBarInactiveTintColor:"#959595",
                headerShown:false,
                tabBarStyle:{
                    height:55,
                
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
            name="Sat"
            component={HomeNavigator}
            options={{
                tabBarButton:(props)=> <CustomTabBarButton {...props}/>
            }}
            />
            <Tab.Screen
            component={SohbetNavigator}
                name="Sohbet"
                options={{
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="message-processing" size={24} color={color}/>
                    )
                }}
            />
            <Tab.Screen
            component={PostNavigator}
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