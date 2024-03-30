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
        style={{height:height*0.19,marginTop:18,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
      />
      <View style={{height:height*0.044,marginTop:-height*0.04,borderBottomWidth:0.2,borderColor:"#a6a6a6",borderRightWidth:0.2,borderBottomLeftRadius:12,borderBottomRightRadius:12,backgroundColor:"white"}}>

      </View>
    </View>
  )
}

export default index