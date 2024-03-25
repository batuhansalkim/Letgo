import Rect,{useState,useEffect} from "react";
import { ScrollView } from "react-native";
import productsassets from "../../../assets/products";
import { Category, Product } from "../../models/index";
import MainProducts from "../../components/MainProducts";
import MessageNotification from "../../components/MessageNotification/index";
import Products from "../../../assets/products";
import FilteringCategory from "../../components/FilteringCategory/index";

function index(props){
    const[products,setProduct] = useState<Product[]>([]);
    const [category,setCategory] = useState<Category>(props.route.params.category)
    useEffect(()=>{
        setProduct(Products);
    },[]);
    return(
        <ScrollView style={{backgroundColor:"white",height:"100%"}}>
            <FilteringCategory category={category}/>
            <MessageNotification/>
            <MainProducts mainProducts={products} filtered={true} header={"Arama Sonuçları (1041643)"}/>
            
        </ScrollView>
    )
}

export default index;