import React from 'react'
import { View, Text } from 'react-native'
import {Divider} from "react-native-elements"
import About from '../components/About'
import BottomNav from '../components/BottomNav'
import MenuItem from '../components/MenuItem'

export default function RestaurantDetail({route}) {
    return (
            <View style = {{
                backgroundColor: "white"
            }}>
                <View 
                style= 
                {{
                    fontFamily: "Jost", 
                    width: "auto", 
                    height: "auto",  
                    flexDirection: "row", 
                    marginTop: "10px", 
                    alignSelf: "center",
                    paddingVertical: "6pt",
                    }}>
                <Text 
                style = {{
                color: 'rgb( 247, 80, 0)',  
                fontSize: 32,
                fontWeight: "900"
                }}
                >garson</Text>
            </View>
            <About route = {route}/>
            <Divider width={1.8} style = {{marginVertical: 20}} /> 
            <MenuItem route = {route}/>
            <BottomNav/>

        </View>
    )
}
