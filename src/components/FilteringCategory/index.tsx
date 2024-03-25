import React,{useState,useEffect} from "react";
import { View,Text,ScrollView,Image,StyleSheet,Dimensions } from "react-native";
import filteringsData from "../../../assets/filterings";
import { Filtering,Category } from "../../models";
import {Feather} from "@expo/vector-icons";


const {width,height} = Dimensions.get("window");

export default function index({category}:{category:Category}){
    const [filtering,setFiltering] = useState<Filtering[]>([]);

    useEffect(()=>{
        setFiltering(filteringsData);
        return ()=>{
            setFiltering([]);
        }
    },[])
    return(
        <ScrollView style={{marginHorizontal:12,marginVertical:14}} horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>

            <View  style={[{backgroundColor:"#616161",},styles.filteringBadge]}>
                    <Image source={category.src} style={{width:30,height:30,borderRadius:16,marginRight:5,marginLeft:-3}}/>
                    <Text style={{color:"white",fontWeight:"600",fontSize:14, }}>{category.name}</Text>
                    <Feather style={{marginLeft:4}} name="chevron-down" size={20} color="#818181"/>
                </View>

            {filtering.map((item:Filtering)=>(
                <View key={item.id} style={[{backgroundColor:"#f5f5f5"},styles.filteringBadge]}>
                    <Text style={{fontWeight:"600",color:"424242"}}>{item.name}</Text>
                    <Feather style={{marginLeft:4}} name="chevron-down" size={20} color="#818181"/>
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
        height:height*0.048,
        marginRight:7,
        alignItems:"center",
        borderRadius:18,
        justifyContent:"space-between",
        paddingVertical:5,
        
    }
})