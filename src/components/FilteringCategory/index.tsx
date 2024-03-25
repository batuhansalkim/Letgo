import React,{useState,useEffect} from "react";
import { View,Text,ScrollView,Image,StyleSheet,Dimensions } from "react-native";
import filteringsData from "../../../assets/filterings";
import { Filtering } from "../../models";
import {Feather} from "@expo/vector-icons";


const {width,height} = Dimensions.get("window");

export default function index(){
    const [filtering,setFiltering] = useState<Filtering[]>([]);

    useEffect(()=>{
        setFiltering(filteringsData);
        return ()=>{
            setFiltering([]);
        }
    },[])
    return(
        <ScrollView style={{marginHorizontal:12,marginVertical:14}} horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
            {filtering.map((item:Filtering)=>(
                <View key={item.id} style={[{backgroundColor:"#f5f5f5"},styles.filteringBadge]}>
                    <Text>{item.name}</Text>
                    <Feather style={{}} name="chevron-down" size={20}/>
                </View>
            ))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    filteringBadge:{
        flexDirection:"row",
        paddingHorizontal:6,
        // backgroundColor:"red",
        height:height*0.04,
        marginRight:7,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"center",
        
    }
})