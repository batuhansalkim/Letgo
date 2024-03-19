import { Dimensions,StyleSheet } from "react-native";

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    favorite:{
        width:width*0.3,
        
    },
    favoriteView:{
        width:width*0.26,
        height:width*0.26,
        // backgroundColor:"red",
    },
    favoriteImage:{
        width:width*0.26,
        height:width*0.26,
        borderRadius:10,
    }
})

export default styles;