import React from 'react'
import { View, Text, Image } from 'react-native'
import MenuItem from './MenuItem';

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
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source = {{ uri: props.image}} style = {{width: "100%", height: 220}} />
); 

const RestaurantTitle = (props) => (
    <Text style = {{
       
        fontSize: 29,
        fontWeight: "600", 
        marginTop: 10,
        marginHorizontal: 15,  

    }}>{props.title}</Text>
);


const RestaurantDescription = (props) => (
    <View style = {{flexDirection: "column"}}>
        <Text
        style= {{
                
        fontSize: 15,
        fontWeight: "400", 
        marginTop: 10,
        marginHorizontal: 15,    
        }}
    > {props.rating} {props.category}</Text>
    <Text  
        style= {{
                
        fontSize: 15,
        fontWeight: "400", 
        marginTop: 10,
        marginHorizontal: 15,    
        }}
    > {props.workingHours}</Text>
    </View>
  
);







