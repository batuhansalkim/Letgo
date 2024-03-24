import React,{useState,useEffect} from "react";
import { View,Text,ScrollView,Image } from "react-native";
import filteringsData from "../../../assets/filterings";
import { Filtering } from "../../models";

export default function index(){
    const [filtering,setFiltering] = useState<Filtering[]>([]);

    useEffect(()=>{
        setFiltering(filteringsData);
        return ()=>{
            setFiltering([]);
        }
    },[])
    return(
        <ScrollView>
            
        </ScrollView>
    )
}