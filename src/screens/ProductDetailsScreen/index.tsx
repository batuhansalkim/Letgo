import { View, Text,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Product } from '../../models';
import ImageCoursel from "../../components/ImageCarousel";
import DetailsTextBox from "../../components/DetailsTextBox";
const index = (props) => {
  const [product,setProduct] = useState<Product>(props.route.params.product);
  return (
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
      <ImageCoursel images={product.images}/>
      <DetailsTextBox price={product.price} name={product.name} description={product.description}/>
    </ScrollView>
  )
}

export default index