import {  Text, View } from 'react-native'
import React from 'react'
import { Product } from '../../models'
import styles from './styles';
import {AntDesign} from "@expo/vector-icons";
import FavoriteProductItem from "../../components/FavoriteProductItem";

type mainProductsProps={
    mainProducts:Product[];
    header:string;
    filtered:boolean;
}
const MainProducts = ({mainProducts,header,filtered}:mainProductsProps) => {
  return (
    <View style={styles.productsContainer}>
      <View style={styles.titleProducts}>
        
        <Text style={filtered ? styles.topicTitlefiltered : styles.topicTitle}>{header}</Text>
        
        {!filtered ?(
           <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={styles.detailTitle}>Düzelt</Text>
            <AntDesign name='right' size={18} color="#F24E61"/>
        </View>):null
        }
      </View>

      <View style={styles.listContainer}>
         {
            mainProducts.map((item,index)=>{
                return(
                    <FavoriteProductItem product={item} key={item.id} prodType='main'/>
                )
            })
         }
      </View>
    </View>
  )
}

export default MainProducts

