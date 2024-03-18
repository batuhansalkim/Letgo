import { Dimensions,StyleSheet } from "react-native";

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    favorite:{
        width:40,
        
    },
    favoriteView:{
        width:58,
        height:58,
        backgroundColor:"red",
    },
    favoriteImage:{
        width:48,
        height:48,
    }
})

export default styles;