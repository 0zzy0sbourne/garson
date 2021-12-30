import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 
export default function RestaurantCard() {
    return (
        <View>
            <RestaurantImage/>
            <Text>Restaurant card</Text>
        </View>
    )
}

const RestaurantImage = () => (
    <>
        <Image
            source = {{
                uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
            }}
            style = {{
                width: "100%", height: 180,
            }}
        />
        <TouchableOpacity style = {{position: "absolute", left: "20", bottom:"20"}}>
            <MaterialCommunityIcons name = "heart-outline" size={30} color = "#fff"/>
        </TouchableOpacity>
    </>
);
