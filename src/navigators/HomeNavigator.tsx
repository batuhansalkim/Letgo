import React from "react";
import { View,Text,TouchableOpacity,Image,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const MainHeaderComponent=()=>{
    return(
        <SafeAreaView style={{flexDirection:"row",alignItems:"center",width:"90%",marginHorizontal:"5%",marginBottom:5}}>
            <TouchableOpacity>
                <Image style={{width:38,height:38,borderRadius:20}} source={require("../../assets/avatar.jpg")}/>
            </TouchableOpacity>
            <TextInput placeholder="Ara..." style={{flex:1,backgroundColor:"#e5e5e5",marginHorizontal:10,height:35,borderRadius:10,paddingLeft:"5%"}} />
            <Text style={{color:"#FF184D",fontSize:18}}>Filtrele</  Text>
        </SafeAreaView>
    )
    
}

export default function HomeNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                header:()=>(
                    <MainHeaderComponent/>
                )
            }}/>
        </Stack.Navigator>
    )
}  