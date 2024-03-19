import React,{useEffect,useState} from "react";
import { Text, View,ScrollView } from "react-native";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";
import Products from "../../../assets/products";
import { Product } from "../../models/index";
import FavoriteProductItem from "../../components/FavoriteProductItem";
export default function index(){
    const[products,setProduct] = useState<Product[]>([]);
    useEffect(()=>{
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
                    <AntDesign name="right" size={20} color="#F24E61"/>
                </View>
            </View>

            {/*Render favorite products */}
            <ScrollView
            bounces={true}
            horizontal={true}
            >
                {products.map((item)=>{return <FavoriteProductItem key={item.id} product={item}/>})}
            </ScrollView>
        </View>
    )
}