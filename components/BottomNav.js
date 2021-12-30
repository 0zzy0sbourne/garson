import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 
import { TouchableOpacity } from 'react-native-web';


export default function BottomNav() {
    return (
        <View style = {{
            flexDirection: "row", 
            margin: 10, 
            marginHorizontal: 30,
            justifyContent: "space-between"
        }}>
            {/* Home Icon */}
            <Icon icon = "home"  /> 
            <Icon icon = "shopping-cart" />
            <Icon icon = "qrcode" />
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
            size = {25}
            style= {{
                marginBottom: 3, 
                alignSelf: "center"
            }} 
            />
        </View>
    </TouchableOpacity>
    
); 
