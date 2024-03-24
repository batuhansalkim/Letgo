import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productsContainer:{
        width:"92%",
        // backgroundColor:"red",
        marginHorizontal:"4%",
        
    },
    titleProducts:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:15,
        marginTop:20,
    },
    topicTitle:{
        fontWeight:"bold",
        fontSize:16,
    },
    detailTitle:{
        fontWeight:"bold",
        fontSize:14,
        color:"#F24E61",
    },
    listContainer:{
        flexDirection:"row",
        alignItems:"flex-start",
        flexWrap:"wrap",
        backgroundColor:"white",
        width:"100%",
    },
    topicTitlefiltered:{
        fontWeight:"bold",
        fontSize:18,
        // color:"red",
    }

})

export default styles;