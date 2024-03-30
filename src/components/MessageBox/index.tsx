import { View, Text,ScrollView,TextInput,Dimensions } from 'react-native'
import React,{useState} from 'react'


const {height,width} = Dimensions.get("window");

const MessageBox=({title}:{title:string})=>{
  return(
    <View style={{borderRadius:40,marginLeft:8,backgroundColor:"#FF3E55",alignItems:"center",justifyContent:"center",}}>      
      <Text style={{paddingHorizontal:15,paddingVertical:8,color:"white"}}>{title}</Text>
    </View>
  )
}
const index = () => {

  const [searchValue,setSearchValue ] = useState<string>("Hala müsait mi ?");
  const [messages,setMessages] = useState<string[]>(["Hala satılık mı ?","Fiyata pazarlık payı var mı ?","Ne durumda ?"]);


  return (
    <View style={{bottom:0,width:"100%",height:height*0.15,backgroundColor:"white",shadowColor:"gray",shadowOpacity:0.9,
    }}>
      <ScrollView style={{marginTop:10}} horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
        {messages.map((item,index)=>(
          <MessageBox title={item}/>
        ))}
      </ScrollView>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between",padding: 10 }}>
      <TextInput 
      style={{ height: 35, backgroundColor: "#f5f5f5", borderRadius: 10, flex: 1,padding:10 ,marginTop:7}} 
      onChangeText={setSearchValue} 
      value={searchValue}
      />
      <Text style={{ fontWeight: "bold", color: "#FF3E55", marginLeft: 10 ,fontSize:16}}>Gönder</Text>
      </View>

    </View>
  )
}

export default index