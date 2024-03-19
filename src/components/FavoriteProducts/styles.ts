import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    productContainer:{
        width:"96%",
        marginLeft:"4%",
    },
    titleProducts:{
        justifyContent:"space-between",
        flexDirection:"row",
        // backgroundColor:"red",
        alignItems:"center",
        marginBottom:12,
    },
    topicTitle:{
        fontWeight:"bold",
        fontSize:15,
    },
    detailTitle:{
        fontWeight:"bold",
        fontSize:14,
        color:"#F24E61"
    },
    detailContainr:{
        flexDirection:"row",
        alignItems:"center",
    }
})

export default styles;