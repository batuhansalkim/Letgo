import { View, Text,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import products from '../../../assets/products'
import { Product } from '../../models'

export default function index() {

    const [favoriteProducts,setFavoriteProducts] = useState<Product[]>([]);

    useEffect(()=>{
        setFavoriteProducts(products);
        return ()=>{
            setFavoriteProducts([]);
        }
    })

  return (
    <View style={{padding:13}}>
        <FlatList data={favoriteProducts} renderItem={({item,index})=>(
            <Text>{item.name}</Text>
        )}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}