import { View, Text,Dimensions } from 'react-native'
import React from 'react';
import MapView,{PROVIDER_GOOGLE} from "react-native-maps";

const {width,height} = Dimensions.get("window");

const index = () => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude:41.0082,
            longitude:28.9784,
            latitudeDelta:0,
            longitudeDelta:0.5,
        }}
        style={{height:height*0.19,borderRadius:12,marginTop:18,}}
      />
      <View style={{flexDirection:"row",alignItems:"center",height:height*0.044,marginTop:-height*0.04,borderBottomWidth:0.2,borderColor:"#a6a6a6",borderRightWidth:0.2,backgroundColor:"white"}}>
        <Text style={{paddingHorizontal:16,}}>162534, Söğüt</Text>
      </View>
    </View>
  )
}

export default index