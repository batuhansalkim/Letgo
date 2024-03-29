import { View, Text,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Product } from '../../models';
import ImageCoursel from "../../components/ImageCarousel";
import DetailsTextBox from "../../components/DetailsTextBox";
import SellerProfile from "../../components/SellerProfile";
import MappingComponent from "../../components/MappingComponent";

const index = (props) => {
  const [product,setProduct] = useState<Product>(props.route.params.product);
  return (
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
      <ImageCoursel images={product.images}/>
      <View style={{paddingHorizontal:20,paddingVertical:14}}>
        <DetailsTextBox price={product.price} name={product.name} description={product.description}/>
        <SellerProfile averageRating={product.rating}/>
        <MappingComponent/>
      </View>
      
    </ScrollView>
  )
}

export default index