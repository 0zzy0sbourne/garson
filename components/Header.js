import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import HeaderButtons from './HeaderButtons';
import Ionicons from "react-native-vector-icons/Ionicons"; 



export default function Header() {
    const [activeTab, setActiveTab] = useState("Tab1")
    return (
            
        <View 
        style = {{flexDirection: "column", 
        alignSelf: "center", 
        paddingVertical: 10,
        }}>
            
            <View style= {{fontFamily: "Jost", width: "auto", height: "auto",  flexDirection: "row", marginTop: "10px", alignSelf: "center"}}>
                <Text 
                style = {{
                color: 'rgb( 247, 80, 0)',  
                fontSize: 32,
                fontWeight: "900"
                }}
                >garson</Text>
            </View>
        
            
            {/* location bar */}
            <View 
            style = {{
                flexDirection: "row", 
                alignSelf: "center",

                }}>
                <Ionicons name = "location-sharp" size={24} /> 
                <Text
                style = {{
                    fontSize: 16,
                    fontWeight: "400"
                }}
                >Location</Text>
                <Ionicons name = "arrow-down" size={24} /> 
            </View>
           

            
            
            <View style = {{flexDirection: "row", marginTop: "10px"}}>
                <HeaderButtons text="Tab1" buttoncolor =  'rgba( 247, 80, 0, 0.8)' activeTab ={activeTab} setActiveTab = {setActiveTab} />
                <HeaderButtons text="Tab2" buttoncolor =  'gray' activeTab ={activeTab} setActiveTab = {setActiveTab}/>
                
                
                {/* Settings Icon */}
                <Ionicons name = "settings" size={24} /> 
                {/* Search Icon */}
                <Ionicons name = "search" size={24} /> 
            </View>
        
        
        </View>
    )
}

/*
const HeaderButton = (props) =>  (

        <TouchableOpacity 
        style = {{
            backgroundColor:"black",
            paddingVertical: 6, 
            paddingHorizontal: 16,
            borderRadius: 30, 
        }}
        
        >
            <Text>{props.text}</Text>
        </TouchableOpacity>
    
);
*/
