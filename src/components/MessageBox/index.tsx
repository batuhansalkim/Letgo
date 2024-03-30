import { View, Text,ScrollView,TextInput,Dimensions } from 'react-native'
import React,{useState} from 'react'


const {height,width} = Dimensions.get("window");


const index = () => {
  return (
    <View style={{position:"absolute",bottom:0,width:"100%",height:height*0.15,backgroundColor:"white",shadowColor:"gray",shadowOpacity:0.3,
    }}>
      <ScrollView>

      </ScrollView>

      <View>
        <TextInput/>
         <Text></Text>
      </View>
    </View>
  )
}

export default index