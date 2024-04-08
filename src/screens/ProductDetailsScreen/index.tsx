import { View, Text,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Product } from '../../models';
import ImageCoursel from "../../components/ImageCarousel";
import DetailsTextBox from "../../components/DetailsTextBox";
import SellerProfile from "../../components/SellerProfile";
import MappingComponent from "../../components/MappingComponent";
import MessageBox from "../../components/MessageBox";


import SocialMedias from "../../components/SocialMedias/";


const index = (props) => {
  const [product,setProduct] = useState<Product>(props.route.params.product);
  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
      <ImageCoursel images={product.images}/>
      <View style={{paddingHorizontal:20,paddingVertical:14}}>
        <DetailsTextBox price={product.price} name={product.name} description={product.description}/>
        <SellerProfile averageRating={product.rating}/>
        <MappingComponent/>
        <SocialMedias/>
        
      </View>
    </ScrollView>
    <MessageBox/>
    </View>
  )
}

export default index