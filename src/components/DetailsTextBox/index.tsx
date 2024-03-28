import { View, Text } from 'react-native'
import React from 'react';
import {FontAwesome}  from '@expo/vector-icons';

const index = ({price,name,description}:{price:number,name:string,description?:string}) => {
  return (
    <View>
      <View>
        <View>
            <FontAwesome name='turkish-lira' size={26} color="black"/>
            <Text>{price}</Text>
        </View>
      </View>
    </View>
  )
}

export default index