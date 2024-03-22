import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import categoriesData from "../../../assets/categories";
import styles from "./styles";
import { Category } from "../../models";

export default function CategoryFilter() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setCategories(categoriesData);
        return () => {
            setCategories([]);
        }
    }, []); // Bağımlılık dizisi boş bırakıldı

    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollStyle}
        >
            {categories.map((item: Category) => (
                <TouchableOpacity style={styles.center}>
                    <Image source={item.src} style={styles.image}/>
                    <Text style={{fontSize:11,color:"#767575",fontWeight:"bold"}}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}
