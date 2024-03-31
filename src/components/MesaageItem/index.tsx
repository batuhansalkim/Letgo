import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import { Message } from '../../models'
import { FontAwesome } from '@expo/vector-icons';
type MessageItemProps={
    item:Message
}

const index = ({item}:MessageItemProps) => {
  return (
    <TouchableOpacity style={styles.messageItem}>
        <View>
            <Image source={{uri:item.image}} style={{width:85,height:85,borderRadius:12}}/>
            <View style={{backgroundColor:"#A3CE72",width:36,height:36,position:"absolute",borderRadius:18,bottom:0,left:65,justifyContent:"center",alignItems:"center",}}>
                <Text style={{color:"white",fontWeight:"bold"}}>S</Text>
            </View>
        </View>

        <View style={{flex:1,marginLeft:20,flexDirection:"column"}}>
            
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                <Text style={{fontWeight:"600",fontSize:16}}>{item.productName.length>25? item.productName.substring(0,19) + "..." : item.productName}</Text>
                <Text style={{color:"#8B8B8B"}}>{item.date}</Text>
            </View>
            
            <Text style={{marginTop:5,fontSize:15}}>
                {item.sellerName}
            </Text>
            {
                item.situation=="Satıldı" ? (
                    <View>
                        <Text></Text>
                    </View>
                ):(
                    <View>
                        <Text>
                            
                        </Text>
                    </View>
                )
            }
            <View>

            </View>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    messageItem:{
        padding:15,
        borderWidth:0.7,
        borderColor:"#e2e2e2",
        flexDirection:"row",
        alignItems:"center",
    }
})
export default index