import {  Text, View } from 'react-native'
import React from 'react'
import { Product } from '../../models'
import styles from './styles';
import {AntDesign} from "@expo/vector-icons";
import FavoriteProductItem from "../../components/FavoriteProductItem";

type mainProductsProps={
    mainProducts:Product[];
}
const MainProducts = ({mainProducts,}:mainProductsProps) => {
  return (
    <View style={styles.productsContainer}>
      <View style={styles.titleProducts}>
        
        <Text style={styles.topicTitle}>Söğüt</Text>
        
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={styles.detailTitle}>Düzelt</Text>
            <AntDesign name='right' size={18} color="#F24E61"/>
        </View>
      </View>

      <View>
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

