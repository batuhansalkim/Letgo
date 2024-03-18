import { View,Text,Image,TouchableOpacity } from "react-native";
import { Product } from "../../models";
import styles from "./styles";

type productprops={
    product:Product;
}

export default function index({product}:productprops){
    return(
        <TouchableOpacity>
            <View style={styles.favoriteView}>
                <Image source={{uri:product.image}}/>
            </View>
        </TouchableOpacity>
    )
}