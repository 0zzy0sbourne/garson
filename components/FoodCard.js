import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 

const suggestions = [
    {
        categoryName: "Bakery",
        restaurantName: "Besiktas Burger King",
        foodName: "Big King",
        foodImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80", 
        price: "32$",
        rating: "4.2", 
    }, 

     {
        categoryName: "Fast Food",
        restaurantName: "Papa John's",
        foodName: "Orta Boy Pizza",
        foodImage: "https://cdn.getiryemek.com/restaurants/1581323800278_1125x522.jpeg",
        price: "22$",
        rating: "4.4", 
    }, 
     {
        categoryName: "Bakery",
        restaurantName: "Besiktas Burger King",
        foodName: "Big King",
        foodImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80", 
        price: "32$",
        rating: "4.2", 
    }, 
     {
        categoryName: "Bakery",
        restaurantName: "Besiktas Burger King",
        foodName: "Big King",
        foodImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80", 
        price: "32$",
        rating: "4.2", 
    }, 
     {
        categoryName: "Bakery",
        restaurantName: "Besiktas Burger King",
        foodName: "Big King",
        foodImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80", 
        price: "32$",
        rating: "4.2", 
    }, 
     {
        categoryName: "Bakery",
        restaurantName: "Besiktas Burger King",
        foodName: "Big King",
        foodImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80", 
        price: "32$",
        rating: "4.2", 
    }, 
  

]
export default function RestaurantCard() {
    return (

        <ScrollView showsVerticalScrollIndicator= {false}
            style={{backgroundColor: "white"}}
        > {/* Only Vertical ScrollView */}
            
            {/* More than one Horizontal ScrollViews */}



                 {/* horizontal scrollview for one category*/}
                
                <View>
                        <Text
                            style={{fontSize: 21, color: "rgb(247,80,0)", fontWeight: "600"}}
                        >
                            Bakery
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {suggestions.map((suggestion, index) => (
                       <TouchableOpacity style={{
                        alignItems: "center",
                        marginRight:"30",   
                        paddingHorizontal: 120,
                        borderRadius: "30" 
                        
                    }}>
                        <FoodHeader restaurantName = {suggestion.restaurantName}/>
                        <FoodImage url = {suggestion.foodImage} />
                        <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} />

                       </TouchableOpacity>
                   ))}
                
                 
                </ScrollView>

                
             
        
        </ScrollView>
    )
}

const FoodImage = (props) => (
    <>
        <Image
            source = {{
                uri: `${props.url}`
            }}
            style = {{
                width: "250%", height: 160,
            }}
        />
        <TouchableOpacity style = {{position: "absolute"}}>
            <MaterialCommunityIcons name = "heart-outline" size={30} color = "#fff"/>
        </TouchableOpacity>
    </>
);

const FoodInfo = (props) => ( 
    <View 
    style = {{
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginTop: 5,
    }}>

    <View>
        <Text>{props.foodName}</Text>
        <Text>{props.price}</Text>
        <Text>{props.rating}</Text>
    </View>

    </View>
)

const FoodHeader= (props) => (
    <View><Text>{props.restaurantName}</Text></View>
)
