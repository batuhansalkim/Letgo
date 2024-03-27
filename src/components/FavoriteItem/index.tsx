import React from "react";
import { View,Text,Image,Dimensions } from "react-native";
import { Product } from "../../models";
import {Ionicons} from "@expo/vector-icons";
const {height,width} = Dimensions.get("window");

type favoriteProducts={
    product :Product;
}
export default function FavoriteItem({product}:favoriteProducts){
    return(
        <View style={{borderColor:"#EAEAEA",borderWidth:2,shadowColor:"gray",shadowOpacity:0.12,borderRadius:20,marginBottom:18,height:height*0.20,alignItems:"center",}}>
            <View style={{flexDirection:"row",marginTop:10,alignItems:"center",paddingBottom:18,borderBottomWidth:1.2,borderBottomColor:"#dcdee0"}}>
                <Image style={{width:width*0.19,height:width*0.19,borderRadius:8}} source={{uri:product.image}}/>
                <View style={{width:"70%",paddingLeft:10,}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>₺{product.price}</Text>
                        <Ionicons name="trash-sharp" size={20} color="#919191"/>        
                    </View>

                    <Text style={{color:"#757575",fontSize:13}}>{product.description}</Text>

                </View>
            </View>
            
            <View style={{width:"75%",marginTop:10,flexDirection:"row",marginHorizontal:"11%",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{color:"7A7A7A",fontWeight:"bold",fontSize:14}}>Paylaş</Text>
                <Text style={{color:"#FF3E55",fontWeight:"bold",fontSize:14}}>Sohbet Et</Text>
            </View>
        </View>
    )
}

// import React from "react";
// import { View,Text,Image } from "react-native";
// import { Product } from "../../models";

// type favoriteProducts={
//     product:Product
// }
// function index({product}:favoriteProducts) {
//     return(
//         <View>
//             <View>
//                 <Image/>
//                 <View>
//                     <View>
//                         <Text>$139.000</Text>
//                         /*İcon ÇÖP KUTUSU*/
//                     </View>
//                     <Text>2011 Fiat Linea ACTIVE PLUS 1.3</Text>
//                     <Text>MULTIJET 90 HP W/O MP3</Text>
//                 </View>
//             </View>
//             <View>
//                 <Text>Daha fazla bilgi</Text>
//             </View>
//         </View>
//     )
// }

// export default index;