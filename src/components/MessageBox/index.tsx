import { View, Text,ScrollView,TextInput,Dimensions } from 'react-native'
import React,{useState} from 'react'


const {height,width} = Dimensions.get("window");

const MessageBox(){
  
}
const index = () => {

  const [searchValue,setSearchValue ] = useState<string>("Hala müsait mi ?");
  const [messages,setMessages] = useState<string[]>(["Hala satılık mı ?","Fiyata pazarlık payı var mı ?","Ne durumda ?"]);


  return (
    <View style={{position:"absolute",bottom:0,width:"100%",height:height*0.15,backgroundColor:"white",shadowColor:"gray",shadowOpacity:0.3,
    }}>
      <ScrollView horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
        {messages.map((item,index)=>(
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>

      <View>
        <TextInput/>
         <Text></Text>
      </View>
    </View>
  )
}

export default index