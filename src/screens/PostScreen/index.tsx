import { View,FlatList,Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import products from '../../../assets/products'
import { Product } from '../../models'
import FavoriteItem from '../../components/FavoriteItem'


export default function PostScreen() {

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
            <FavoriteItem product={item}/>            
        )}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}