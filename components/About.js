import React from 'react'
import { View, Text, Image } from 'react-native'
import MenuItem from './MenuItem';
import Ionicons from "react-native-vector-icons/Ionicons"; 
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 
import MenuNav from './MenuNav';
import { Divider } from 'react-native-elements';



const image = "https://cdn.yenicaggazetesi.com.tr/news/476189.jpg"; 
const title = "Burger King"; 

const description = "Fast-Food"; 

export default function About(props) {
    const {name, image, rating, categories, workingHours} = props.route.params; 
    return (
        <View>
            <RestaurantImage image = {image}/>
            <RestaurantTitle title = {name} />
            <RestaurantDescription rating = {rating} category = {categories} workingHours = {workingHours} />
            <Divider width={1.8} style = {{marginVertical: 20}} /> 
            <MenuNav/>
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source = {{ uri: props.image}} style = {{width: "100%", height: 220}} />
); 

const RestaurantTitle = (props) => (
    <Text style = {{
       
        fontSize: 24,
        fontWeight: "600", 
        marginTop: 10,
        marginHorizontal: 15,  

    }}>{props.title}</Text>
);


const RestaurantDescription = (props) => (
    <View style = {{flexDirection: "column"}}>
        <View style=
        {{
            flexDirection: "row",
            alignItems: "center" ,
            marginHorizontal: 15,
        
        }}>
            <View style = 
            {{flexDirection:"row", 
            alignItems:"center"
            }}>
                <Ionicons name = "star" style = {{color: "rgb(247,80,0)", }} /> 
                 <Text
                style= {{
                fontSize: 15,
                fontWeight: "400", 
                marginTop: 10,
                }}
                > {props.rating}</Text>

            </View>
                

            <Text
            style= {{
                
            fontSize: 15,
            fontWeight: "400", 
            marginTop: 10,
            marginHorizontal: 15,    
            }}
            > {props.category}</Text>


        </View> 

    <View style = 
        {{ 
            flexDirection: "row",
            alignItems: "center" ,
            marginHorizontal: 15,}}>
        
        <Ionicons name = "ios-time" /> 
        <Text  
        style= {{
                
        fontSize: 15,
        fontWeight: "400", 
        marginTop: 10,
        }}
    > {props.workingHours}</Text>

    </View>
  
    </View>
  
);







