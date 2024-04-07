import React,{useEffect,useState} from "react";
import { Text, View,ScrollView } from "react-native";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";
import Products from "../../../assets/products";
import { Product } from "../../models/index";
import FavoriteProductItem from "../../components/FavoriteProductItem";


export default function index(){
    const[products,setProduct] = useState<Product[]>([]);
    useEffect(()=>{ //categoryFilter da retrn ile temizleme işlemi yaptık ama burada yapmadık sebebini pek anlayamamadım
        setProduct(Products);
        
    },[]);
    console.log("The products batu",products);
    return(
        <View style={styles.productContainer}>
            {/*Render Header */}
            <View style={styles.titleProducts}>
                <Text style={styles.topicTitle}>Vitrin İlanları</Text>
                <View style={styles.detailContainr}>
                    <Text style={styles.detailTitle}>Hepsini gör</Text>
                    <AntDesign name="right" size={18} color="#F24E61"/>
                </View>
            </View>

            {/*Render favorite products */}
            <ScrollView
            bounces={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
                {products.map((item)=>{return <FavoriteProductItem prodType="Favorite" key={item.id} product={item}/>})}
            </ScrollView>
        </View>
    )
}