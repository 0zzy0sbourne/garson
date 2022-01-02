import React from 'react'
import { View, Text, StyleSheet ,Image, ScrollView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Ionicons from "react-native-vector-icons/Ionicons"; 


const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

const foods = [
    {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
        calories: "650",
    },
    {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
        calories: "650",
    },
      {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
        calories: "650",
    },
      {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
        calories: "650",
    },
      {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
        calories: "650",
    },
]; 
export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
 
            {foods.map((food, index) => ( 
                <View key = {index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food = {food} /> 
                        <FoodImage food = {food} /> 
                    </View>
                    <Divider width={0.5} orientation=' ="vertical' /> 
                </View>
                
            ))}

        </ScrollView>
       
      
    )
}


const FoodInfo = (props) =>  (
    <View style = {{
        width: 240,
        justifyContent: "space-evenly"
    }}>
        <Text style = {styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <View style={{flexDirection: "row"}}>
            <Text>{props.food.price}</Text>
            <Ionicons name = "ios-add-circle" /> 
            <Ionicons  style = {{color: "green"}} name = "ios-leaf"/>
            <View style = {{
                flexDirection: "row", 
            }}>
                <Ionicons style={{color: "rgb(255,134,22)"}} name = "ios-flame"/>
                <Text>{props.food.calories} kcal</Text>
            </View>
        </View>
        
        
    </View>
); 

const FoodImage = (props) => (
    <View>
        <Image source ={{uri: props.food.image}} style = {{width: 100, height: 100, borderRadius: 8}} />
    </View>
); 