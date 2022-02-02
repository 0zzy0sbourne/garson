import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 

export default function FoodCardButton() {
    return (
        <SafeAreaView style = {{
            marginTop: 5,
              backgroundColor: "black", 
            paddingVertical: 4, 
            paddingHorizontal: 16,
            borderRadius: 30, 
        }}>
            <View style = {{
                flexDirection:"row", 
                alignSelf:"center", 
            }}>
                   <FontAwesome5 
                name = "list" 
                style= {{
                    marginBottom: 3, 
                    alignSelf: "center",
                    color:"white",
                    marginRight:5,  
                }} /> 
                <Text style = {{
                color: "white",
                }}>Benzeri 23 ürünü gör</Text>
            </View>
         
        </SafeAreaView>
      
    )
}