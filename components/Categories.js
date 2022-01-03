import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-web'

const categories = [
    {
    image: require("../assets/images/fast-food.png"), 
    text: "Fast Food",
    },
      {
    image: require("../assets/images/coffee.png"), 
    text: "Coffee & Tea",
    },
      {
    image: require("../assets/images/bakery.png"), 
    text: "Bakery",
    },
    {
    image: require("../assets/images/desserts.png"), 
    text: "Desserts",
    },
]; 


export default function Categories() {

    return (
    <View style = {{
        marginTop: "50",
        backgroundColor: "#fff", 
        paddingLeft: 20, 
        paddingVertical: 40,
        paddingHorizontal: 40, 
    }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
            
            <TouchableOpacity>
                <View style = {{
                alignItems: "center",
                marginRight:"30",
                paddingHorizontal: 30, 
                }}>
                <Image source = {category.image} style ={{
                    width: 50, 
                    height: 40, 
                    resizeMode: "contain", 
                }}/>
                <Text style = {{fontSize: "12"}}>
                    {category .text}
                </Text>
                </View> 

            </TouchableOpacity>
            ))}       
         
       
        </ScrollView>
    </View> 
    )
}
