import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    productContainer:{
        width:"92%",
        marginHorizontal:"4%",
    },
    titleProducts:{
        justifyContent:"space-between",
        flexDirection:"row",
        // backgroundColor:"red",
        alignItems:"center",
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