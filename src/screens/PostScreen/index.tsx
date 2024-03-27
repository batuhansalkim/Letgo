import { View,FlatList,Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import products from '../../../assets/products'
import { Product } from '../../models'
import FavoriteItem from '../../components/FavoriteItem'


export default function PostScreen() {

    const [favoriteProducts,setFavoriteProducts] = useState<Product[]>([]);
    const [headerTexts,setHeaderTexts] = useState<string[]>([
        "Favoriler",
        "Satıyor",
        "Süresi Dolmuş",
        "Satıldı"
    ])

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
            stickyHeaderIndices={[0]}
            ListHeaderComponent={()=>(
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:5,marginBottom:15}}> 
                    {headerTexts.map((item,index)=>{
                        return(
                            <View style={{paddingVertical:10,borderBottomWidth:index==0 ? 3:0,borderBottomColor:"#FF3E55"}}>
                                <Text style={{color:index==0?"#FF3E55":"#797979",fontWeight:index==0?"bold":"600",fontSize:15}}>{item}</Text>
                            </View>
                        )
                    })}
                </View>

            )}
        />
    </View>
  )
}