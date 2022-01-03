import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import HeaderButtons from './HeaderButtons';
import Ionicons from "react-native-vector-icons/Ionicons"; 
import LocationSearch from './LocationSearch';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function Header(props) {
    // const [activeTab, setActiveTab] = useState("Delivery")
    return (
            
        <View 
        style = {{flexDirection: "column", 
        alignSelf: "center", 
        paddingVertical: "14pt",
        }}>
            
            <View style= {{fontFamily: "Jost", width: "auto", height: "auto",  flexDirection: "row", marginTop: "10px", alignSelf: "center"}}>
                <Text 
                style = {{
                color: 'rgb( 247, 80, 0)',  
                fontSize: 32,
                marginBottom:"6pt", 
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
                <Ionicons name = "location-sharp" size={24} style = {{marginRight: "10pt"}} /> 
                <Text
                style = {{
                    fontSize: 16,
                    fontWeight: "400"
                }}
                >Location</Text>
                <Ionicons name = "arrow-down" size={24} style = {{marginLeft:"10pt"}} /> 
            </View>
           


            
            
            <View style = {{
                flexDirection: "row", marginTop: "10px",
                }}>
                <HeaderButtons text="Delivery" buttoncolor =  'rgba( 247, 80, 0, 0.8)' activeTab ={props.activeTab} setActiveTab = {props.setActiveTab} />
                <HeaderButtons text="Pickup" buttoncolor =  'gray' activeTab ={props.activeTab} setActiveTab = {props.setActiveTab}/>
                
                
                {/* Settings Icon */}
                <Ionicons name = "settings" size={24} 
                style = {{marginLeft:"100.3pt", }}
                /> 
                {/* Search Icon */}
                <Ionicons name = "search" size={24} style = {{marginLeft: "20pt"}} /> 
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
