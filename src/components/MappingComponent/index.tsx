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
        style={{height:height*0.18,borderRadius:12,marginTop:18}}
      />
    </View>
  )
}

export default index