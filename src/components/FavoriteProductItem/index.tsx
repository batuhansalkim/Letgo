import { View,Text,Image,TouchableOpacity } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

type productprops={
    product:Product,
    prodType:string,
}

export default function index({product,prodType}:productprops){
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{product:product})} style={prodType==="Favorite" ? styles.favorite : styles.main}>
            <View style={prodType==="Favorite" ? styles.favoriteView : styles.mainView}>
                <Image source={{uri:product.image}} resizeMode="stretch" style={prodType==="Favorite"? styles.favoriteImage:styles.mainImg}/>

                {prodType==="Favorite" ?  (
                    parseInt(product.id) %2 ==1 ?(
                    <View style={styles.labeledFav}>
                    <Text style={styles.labeledFavText}>Öne çıkanlar</Text>
                </View>
                ):null):null}
                <TouchableOpacity>
                    <AntDesign style={{position:"absolute",right:4,bottom:5}} name="heart" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}