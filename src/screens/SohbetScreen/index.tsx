import { View, Text,FlatList } from 'react-native'
import React from 'react'
import messagesData from '../../../assets/messages'
const index = () => {
  return (
    <View>
      <FlatList
        data={messagesData}
        renderItem={({item})=><Text>{item.productName}</Text>}
      />
    </View>
  )
}

export default index