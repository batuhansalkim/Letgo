import { View,Text,Image,TouchableOpacity } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";

type productprops={
    product:Product;
}

export default function index({product}:productprops){
    return(
        <TouchableOpacity style={styles.favorite}>
            <View style={styles.favoriteView}>
                <Image source={{uri:product.image}} resizeMode="stretch" style={styles.favoriteImage}/>
                <TouchableOpacity>
                    <AntDesign style={{position:"absolute",right:4,bottom:5}} name="heart" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}