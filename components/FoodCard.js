import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 
import {FastFoodSuggestions, BakerySuggestions, DessertSuggestions, CoffeeSuggestions} from "../foodSuggestions"; 
import { useNavigationBuilder } from '@react-navigation/native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 
import FoodCardButton from './FoodCardButton';




export default function FoodCard({navigation, ...props}) {

    return (

        <ScrollView showsVerticalScrollIndicator= {false}
            style={{backgroundColor: "white",
        }}
        > {/* Only Vertical ScrollView */}
            
            {/* More than one Horizontal ScrollViews */}



                 {/* horizontal scrollview for one category*/}
                
                <View>
                        <Text
                            style=
                            {{
                                fontSize: "21pt", 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: "15pt"
                                
                            }}
                        >
                            Fast-Food
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {FastFoodSuggestions.map((suggestion, index) => {
                        if(props.activeTab === suggestion.tab)
                        {
                            return  (
                                <TouchableOpacity style={{
                                    marginRight:"30",   
                                    borderRadius: "10", 
                                    overflow: "hidden",
                                    width: "75%",  
                                    marginHorizontal: "15pt",
                                    borderRadius: "30",
                                    marginVertical: "", 
 
                                
                                }}
                                onPress = {() => navigation.navigate("RestaurantDetail", 
                                    {
                                        name: suggestion.restaurantName, 
                                        image: suggestion.restaurantImage,
                                        rating: suggestion.restaurantRating,
                                        categories: suggestion.categoryName, 
                                        workingHours: suggestion.workingHours, 
                                    }
                                )}
                                
                                >
                                <FoodHeader restaurantName = {suggestion.restaurantName}/>
                                <FoodImage url = {suggestion.foodImage} />
                                <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />
                                <FoodCardButton />
                            </TouchableOpacity> 
                            )                            

                        }
                    })}
                       
                       
                
                
                 
                </ScrollView>

                
                    
                <Divider width={1.8} style = {{marginVertical: 20}} /> 
                
                <View>
                        <Text
                            style=
                            {{
                                fontSize: "21pt", 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: "15pt"
                                
                            }}
                        >
                            Bakery
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {BakerySuggestions.map((suggestion, index) => {
                        if(props.activeTab === suggestion.tab)
                        {
                            return  (
                                <TouchableOpacity style={{
                                    marginRight:"30",   
                                    borderRadius: "10", 
                                    overflow: "hidden",
                                    width: "75%",  
                                    marginHorizontal: "15pt",
                                    borderRadius: "30",
                                }}
                                    onPress = {() => navigation.navigate("RestaurantDetail", 
                                    {
                                        name: suggestion.restaurantName, 
                                        image: suggestion.restaurantImage,
                                        rating: suggestion.restaurantRating,
                                        categories: suggestion.categoryName, 
                                        workingHours: suggestion.workingHours, 
                                    }
                                )}
                                >
                                <FoodHeader restaurantName = {suggestion.restaurantName}/>
                                <FoodImage url = {suggestion.foodImage} />
                                <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />
                                <FoodCardButton />
                            </TouchableOpacity> 
                            )                            

                        }
                    })}
                       
                
                 
                </ScrollView>

                <Divider width={1.8} style = {{marginVertical: 20}} /> 


                <View>
                        <Text
                            style=
                            {{
                                fontSize: "21pt", 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: "15pt"
                                
                            }}
                        >
                            Desserts
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {DessertSuggestions.map((suggestion, index) => {
                        if(props.activeTab === suggestion.tab)
                        {
                            return  (
                                <TouchableOpacity style={{
                                    marginRight:"30",   
                                    borderRadius: "10", 
                                    overflow: "hidden",
                                    width: "75%",  
                                    marginHorizontal: "15pt",
                                    borderRadius: "30",
                                }}
                                    onPress = {() => navigation.navigate("RestaurantDetail", 
                                    {
                                        name: suggestion.restaurantName, 
                                        image: suggestion.restaurantImage,
                                        rating: suggestion.restaurantRating,
                                        categories: suggestion.categoryName, 
                                        workingHours: suggestion.workingHours, 
                                    }
                                )}
                                >
                                <FoodHeader restaurantName = {suggestion.restaurantName}/>
                                <FoodImage url = {suggestion.foodImage} />
                                <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />
                                <FoodCardButton />
                            </TouchableOpacity> 
                            )                            

                        }
                    })}
                       
                 
                </ScrollView>

                <Divider width={1.8} style = {{marginVertical: 20}} /> 

                <View>
                        <Text
                            style=
                            {{
                                fontSize: "21pt", 
                                color: "rgb(247,80,0)", 
                                fontWeight: "600",
                                paddingHorizontal: "15pt",
                                
                            }}
                        >
                            Coffee
                            </Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{flexDirection: "column"}}
                >
                   
                   {CoffeeSuggestions.map((suggestion, index) =>{
                        if(props.activeTab === suggestion.tab)
                        {
                            return  (
                                <TouchableOpacity style={{
                                    marginRight:"30",   
                                    borderRadius: "10", 
                                    overflow: "hidden",
                                    width: "75%",  
                                    marginHorizontal: "15pt",
                                    borderRadius: "30",
                                }}
                                    onPress = {() => navigation.navigate("RestaurantDetail", 
                                    {
                                        name: suggestion.restaurantName, 
                                        image: suggestion.restaurantImage,
                                        rating: suggestion.restaurantRating,
                                        categories: suggestion.categoryName, 
                                        workingHours: suggestion.workingHours, 

                                    }
                                )}
                                >
                                <FoodHeader restaurantName = {suggestion.restaurantName}/>
                                <FoodImage url = {suggestion.foodImage} />
                                <FoodInfo price = {suggestion.price} foodName = {suggestion.foodName} rating = {suggestion.rating} />
                                <FoodCardButton />
                            </TouchableOpacity> 
                            )                            

                        }
                    })}
                       
                 
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
                width: "100%", height: 180
            }}
            />
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
        <Text style={{
            fontWeight:"bold", 
        fontSize: "16pt"}}>{props.foodName}</Text>
        <View style = {{flexDirection: "row"}}>
            <Text style = {{
            fontSize: "12pt",
            color: "rgb(84, 84, 84)",    
            }}>{props.price}</Text>

            <FontAwesome5 name = "utensils"  style = {{
                marginLeft:"10pt", 
                color: "rgb(247, 80, 80)"}} />
            <FontAwesome5 name = "shopping-basket" style = {{
                marginLeft: "3pt", 
                color: "rgb(247, 80, 80)"}} /> 
            <FontAwesome5 name = "motorcycle" style = {{
                marginLeft: "3pt", 
                color: "rgb(84, 84, 84)"}} /> 
        </View>
        
    </View>
        
    <View 
        style={{
            flexDirection: "row",
 
            width: "75%", 
            alignItems: "center", 
            justifyContent: "center",
            borderRadius: 15,
            
        }}
    >   
        <Ionicons name="star" style = {{
            color: "rgb(252, 161, 24)", 
            size :"22pt", 
        }}/>
        <Text style = {{ fontWeight:"600"}}>{props.rating}</Text>
    </View>
    </View>
)

const FoodHeader= (props) => (
    <View><Text style = {{
        fontSize: "18pt",
        fontWeight: "900", 
    }}>{props.restaurantName}</Text></View>
)
