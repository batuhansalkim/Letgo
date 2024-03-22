import React,{useState,useEffect} from "react";
import { ScrollView, Text, View } from "react-native";
import Products from "../../../assets/products";
import { Product } from "../../models/index";
import FavoriteProducts from "../../components/FavoriteProducts";
import MainProducts from "../../components/MainProducts";
import CategoryFilter from "../../components/CategoryFilter";

export default function HomeScreen(){
    const[products,setProduct] = useState<Product[]>([]);
    useEffect(()=>{
        setProduct(Products);
    },[]);
    return(
        <ScrollView style={{backgroundColor:"white",height:"100%"}}>
            <CategoryFilter/>
            <FavoriteProducts/>
            <MainProducts mainProducts={products}/>
        </ScrollView>
    )
}