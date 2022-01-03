import React from 'react'
import { View, Text, StyleSheet ,Image, ScrollView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Ionicons from "react-native-vector-icons/Ionicons"; 
import Foods from "../MenuLists"; 
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: "16pt",
    fontWeight: "600",
  },
});


export default function MenuItem(props) {

    const {name, image, rating, categories, workingHours} = props.route.params; 
   
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            
            {Foods.map((food, index) => {

                if(food.restaurantName === name)
                {
                    return (
                             <View key = {index}>
                        <View style={styles.menuItemStyle}>
                            <FoodInfo food = {food} /> 
                            <FoodImage food = {food} /> 
                        </View>
                        <Divider width={0.5} orientation=' ="vertical' /> 
                    </View>
                    ); 
               
                }
              
                
            })}

        </ScrollView>
       
      
    )
}


const FoodInfo = (props) =>  (
    <View style = {{
        width: 240,
        justifyContent: "space-evenly"
    }}>
        <Text style = {styles.titleStyle}>{props.food.foodName}</Text>
        <Text style = 
        {{
          fontSize: "11pt",  
        }}>{props.food.description}</Text>
        <View style={{flexDirection: "row"}}>
            <Text style = {{fontSize: "14pt"}}>{props.food.price}</Text>
            <FontAwesome5 
                name = "plus-square"
                size = "22pt"
                 style = {{
                     paddingLeft: "15pt",
                     color: "rgb(247, 80, 0)", 
                 }}
            /> 
            <Ionicons  style = {{
                color: "green",
                paddingLeft: "100pt", 
                }} name = "ios-leaf"/>
            <View style = {{
                flexDirection: "row", 
            }}>
                <Ionicons style=
                {{
                    color: "rgb(255,134,22)",
                    paddingLeft: "3pt", 
                }} name = "ios-flame"/>
                <Text style = 
                {{
                    fontSize: "12pt", paddingLeft: "3pt"
                }}>{props.food.calories} kcal</Text>
            </View>
        </View>
        
        
    </View>
); 

const FoodImage = (props) => (
    <View>
        <Image source ={{uri: props.food.foodImage}} style = {{width: 100, height: 100, borderRadius: 8}} />
    </View>
); 