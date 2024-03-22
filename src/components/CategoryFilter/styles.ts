import { StyleSheet,Dimensions } from "react-native";

const {height,width} = Dimensions.get("window");

const styles = StyleSheet.create({
    center:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:10,
    },
    image:{
        width:56,
        height:56,
        borderRadius:28,

    },
    scrollStyle:{
        // backgroundColor:"red",
        height:height*0.099,
        marginBottom:20,
        marginHorizontal:5,
        marginTop:20
    }
})

export default styles;