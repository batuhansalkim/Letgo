import React from "react";
import { View,Text,Image } from "react-native";
import { Product } from "../../models";

type favoriteProducts={
    product:Product
}
function index({product}:favoriteProducts) {
    return(
        <View>
            <View>
                <Image/>
                <View>
                    <View>
                        <Text>$139.000</Text>
                        /*İcon ÇÖP KUTUSU*/
                    </View>
                    <Text>2011 Fiat Linea ACTIVE PLUS 1.3</Text>
                    <Text>MULTIJET 90 HP W/O MP3</Text>
                </View>
            </View>
            <View>
                <Text>Daha fazla bilgi</Text>
            </View>
        </View>
    )
}

export default index;