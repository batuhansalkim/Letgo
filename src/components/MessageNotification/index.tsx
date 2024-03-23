import React from "react";

import { View,Text } from "react-native";

import {MaterialCommunityIcons,Entypo} from "@expo/vector-icons";


function index(){
    return(
        <View style={{height:40,backgroundColor:"#2C2C2C",flexDirection:"row",alignItems:"center",justifyContent:"space-between",}}>
            <View style={{flexDirection:"row",alignItems:"center",marginLeft:10,}}>
                <MaterialCommunityIcons name="message-processing" size={24} color="#757575"/>
                <Text style={{color:"white",fontSize:13,marginLeft:5}}>Mesaj bildirimlerini aç</Text>
            </View>
            <Entypo style={{marginRight:8,}} color="#969696" size={24} name="chevron-right"/>
        </View>
    )
}

export default index;