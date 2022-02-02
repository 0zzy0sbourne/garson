import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 


export default function BottomNav() {
    return (
        <View style = {{
            flexDirection: "row", 
            margin: 10, 
            marginHorizontal: 30,
            justifyContent: "space-between"
        }}>
            <Icon icon = "home"  /> 
            <Icon icon = "shopping-cart" />
            <Qrmenu icon = "qrcode" />
            <Icon icon = "comment-dots" />
            <Icon icon = "user-circle" />
        </View>
    )
}

const Icon = (props) =>  ( 
    <TouchableOpacity>
        <View>
            <FontAwesome5 
            name = {props.icon} 
            size = {34}
            style= {{
                marginBottom: 3, 
                alignSelf: "center", 
            }} 
            />
        </View>
    </TouchableOpacity>
    
); 
const Qrmenu = (props) => (
        
        <TouchableOpacity>
        <View>
            <FontAwesome5 
            name = {props.icon} 
            size = {57}
            style= {{
                marginBottom: 3, 
                alignSelf: "center",
                color: "rgb(247,80,0)", 
            }} 
            />
        </View>
    </TouchableOpacity>
    

);
