import React,{useState} from "react";
import { View,Text,ScrollView,TouchableOpacity,Image } from "react-native";
import categoriesData from "../../../assets/categories";
import styles from "./styles";
import { Category } from "../../models";

export default function CategoryFilter(){
    const [categories,setCategories] = useState<Category[]>([]);

    return(
        <ScrollView
            bounces={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollStyle}
        >
            
        </ScrollView>
    )
}