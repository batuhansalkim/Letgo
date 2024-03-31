import { View, Text,FlatList } from 'react-native'
import React from 'react'
import messagesData from '../../../assets/messages';
import MessageItem from "../../components/MesaageItem";
const index = () => {
  return (
    <View>
      <FlatList
        data={messagesData}
        renderItem={({item})=><MessageItem item={item}/>}
      />
    </View>
  )
}

export default index