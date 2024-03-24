import Rect,{useState,useEffect} from "react";
import { ScrollView } from "react-native";
import productsassets from "../../../assets/products";
import { Product } from "../../models/index";
import MainProducts from "../../components/MainProducts";
import MessageNotification from "../../components/MessageNotification/index";
import Products from "../../../assets/products";
import FilteringCategory from "../../components/FilteringCategory/index";

function index(){
    const[products,setProduct] = useState<Product[]>([]);
    useEffect(()=>{
        setProduct(Products);
    },[]);
    return(
        <ScrollView style={{backgroundColor:"white",height:"100%"}}>
            <FilteringCategory/>
            <MessageNotification/>
            <MainProducts mainProducts={products} filtered={true} header={"Arama Sonuçları (1041643)"}/>
            
        </ScrollView>
    )
}

export default index;