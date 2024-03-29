import { View, Text,Image } from 'react-native'
import React from 'react'
import {AntDesign,FontAwesome,Feather} from "@expo/vector-icons";

const index = ({averageRating}:{averageRating:number}) => {
  return (
    <View style={{marginTop:22,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
        <View>
            <Image style={{width:46,height:46,borderRadius:23}} source={require("../../../assets/avatar.jpg")}/>
            <AntDesign name='checkcircle' color="#A6CC71" size={14} style={{position:"absolute",left:35,bottom:0}}/>
        </View>
        <View style={{marginLeft:12}}>
            <Text style={{fontWeight:"bold",fontSize:15}}>Batuhan Salkım</Text>
            <View style={{flexDirection:"row",alignItems:"center",paddingTop:3}}>
                {[0,0,0,0,0].map((el,i)=>(
                    <FontAwesome
                        key={i}
                        name='star'
                        size={16}
                        color={i<Math.floor(averageRating) ? "#FFD200":"#DFDFDF"}
                        style={{marginRight:2}}
                    />
                ))}
            </View>
        </View>
      </View>
      <Feather  name='chevron-right' size={28} color="gray"/>
    </View>
  )
}

export default index