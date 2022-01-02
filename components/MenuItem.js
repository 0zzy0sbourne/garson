import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'


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
    },
    {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
    },
      {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
    },
      {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
    },
      {
        title: "Big King", 
        description: "Köfte, karamelize soğan...",
        price: "$12", 
        image: "https://cdn.getiryemek.com/products/1623327056988_500x375.jpeg",
    },
]; 
export default function MenuItem() {
    return (
        <View>
             <View style={styles.menuItemStyle}>
                <FoodInfo food = {foods[0]} /> 
                <FoodImage food = {foods[0]} /> 
            </View>
              <View style={styles.menuItemStyle}>
                <FoodInfo food = {foods[0]} /> 
                <FoodImage food = {foods[0]} /> 
            </View>
              <View style={styles.menuItemStyle}>
                <FoodInfo food = {foods[0]} /> 
                <FoodImage food = {foods[0]} /> 
            </View>
        </View>
       
      
    )
}


const FoodInfo = (props) =>  (
    <View style = {{
        width: 240,
        justifyContent: "space-evenly"
    }}>
        <Text style = {styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
); 

const FoodImage = (props) => (
    <View>
        <Image source ={{uri: props.food.image}} style = {{width: 100, height: 100, borderRadius: 8}} />
    </View>
); 