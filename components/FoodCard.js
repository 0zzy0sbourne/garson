import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 
import {FastFoodSuggestions, BakerySuggestions, DessertSuggestions, CoffeeSuggestions} from "../foodSuggestions"; 

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
                            style=
                            {{
                                fontSize: 21, 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: 20
                                
                            }}
                        >
                            Fast-Food
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {FastFoodSuggestions.map((suggestion, index) => (
                       <TouchableOpacity style={{
                        alignItems: "center",
                        marginRight:"30",   
                        paddingHorizontal: 120,
                        borderRadius: "30" 
                        
                    }}>
                        <FoodHeader restaurantName = {suggestion.restaurantName}/>
                        <FoodImage url = {suggestion.foodImage} />
                        <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />

                       </TouchableOpacity>
                   ))}
                
                 
                </ScrollView>

                
                    

                
                <View>
                        <Text
                            style=
                            {{
                                fontSize: 21, 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: 20
                                
                            }}
                        >
                            Bakery
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {BakerySuggestions.map((suggestion, index) => (
                       <TouchableOpacity style={{
                        alignItems: "center",
                        marginRight:"30",   
                        paddingHorizontal: 120,
                        borderRadius: "30" 
                        
                    }}>
                        <FoodHeader restaurantName = {suggestion.restaurantName}/>
                        <FoodImage url = {suggestion.foodImage} />
                        <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />

                       </TouchableOpacity>
                   ))}
                
                 
                </ScrollView>

                


                <View>
                        <Text
                            style=
                            {{
                                fontSize: 21, 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: 20
                                
                            }}
                        >
                            Desserts
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {DessertSuggestions.map((suggestion, index) => (
                       <TouchableOpacity style={{
                        alignItems: "center",
                        marginRight:"30",   
                        paddingHorizontal: 120,
                        borderRadius: "30" 
                        
                    }}>
                        <FoodHeader restaurantName = {suggestion.restaurantName}/>
                        <FoodImage url = {suggestion.foodImage} />
                        <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />

                       </TouchableOpacity>
                   ))}
                
                 
                </ScrollView>



                <View>
                        <Text
                            style=
                            {{
                                fontSize: 21, 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: 20
                                
                            }}
                        >
                            Coffee
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {CoffeeSuggestions.map((suggestion, index) => (
                       <TouchableOpacity style={{
                        alignItems: "center",
                        marginRight:"30",   
                        paddingHorizontal: 120,
                        borderRadius: "30" 
                        
                    }}>
                        <FoodHeader restaurantName = {suggestion.restaurantName}/>
                        <FoodImage url = {suggestion.foodImage} />
                        <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />

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
                width: "200%", height: 160,
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
        marginTop: 10,
    }}>

    <View>
        <Text style={{fontWeight: "bold"}}>{props.foodName}</Text>
        <Text>{props.price}</Text>
    </View>
    <View>
        <Ionicons name="star"/>
    </View>
    <View 
        style={{
            backgroundColor: "#eee", 
            height: 30, 
            width: 30, 
            alignItems: "center", 
            borderRadius: 15,
        }}
    >   
        
        <Text>{props.rating}</Text>
    </View>
    </View>
)

const FoodHeader= (props) => (
    <View><Text>{props.restaurantName}</Text></View>
)
