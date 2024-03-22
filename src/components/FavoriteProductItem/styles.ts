import { Dimensions,StyleSheet } from "react-native";

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    favorite:{
        width:width*0.29,
        
    },
    favoriteView:{
        width:width*0.27,
        height:width*0.27,
        // backgroundColor:"red",
    },
    favoriteImage:{
        width:width*0.27,
        height:width*0.27,
        borderRadius:10,
    },
    labeledFav:{
        transform:[{rotate:"45deg"}],
        position:"absolute",
        right:-25,
        top:12,
        backgroundColor:"white",
        paddingVertical:3,
        paddingHorizontal:20,
    },
    labeledFavText:{
        fontSize:9,
        fontWeight:"500"
    },
    main:{
        width:width*0.47,
        // borderWidth:5,
        // borderColor:"red",
    },
    mainView:{
        width:width*0.43,
        height:width*0.43,
    },
    mainImg:{
        width:width*0.43,
        height:width*0.43,
        borderRadius:12,
    }
})

export default styles;