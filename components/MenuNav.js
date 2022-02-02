import React from 'react'
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native'
import { Divider } from 'react-native-elements';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 



export default function MenuNav() {
    return (
        <View style = {{
            marginTop: 5,
            backgroundColor: "#fff", 
            paddingLeft: 20, 
            paddingVertical: 4,
            paddingHorizontal: 4, 
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                
                    <View style = {{
                    alignItems: "center",
                    marginRight:30,
                    paddingHorizontal: 3, 
                    flexDirection: "row",
                    }}>
                    <TouchableOpacity>
                        <Text style = {{fontSize: 12}}>
                        NAV BAR 1
                    </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Text style = {{fontSize: 12, marginLeft:10}}>
                        NAV BAR 2
                    </Text>
                    </TouchableOpacity>

                     <TouchableOpacity>
                        <Text style = {{fontSize: 12, marginLeft:10}}>
                        NAV BAR 3
                    </Text>
                    </TouchableOpacity>

                     <TouchableOpacity>
                        <Text style = {{fontSize: 12, marginLeft:10}}>
                        NAV BAR 4
                    </Text>
                    </TouchableOpacity>

                     <TouchableOpacity>
                        <Text style = {{fontSize: 12, marginLeft:10}}>
                        NAV BAR 5
                    </Text>
                    </TouchableOpacity>

                     <TouchableOpacity>
                        <Text style = {{fontSize: 12, marginLeft:10}}>
                        NAV BAR 6
                    </Text>
                    </TouchableOpacity>

                     <TouchableOpacity>
                        <Text style = {{fontSize: 12, marginLeft:10}}>
                        NAV BAR 7
                    </Text>
                    </TouchableOpacity>
                    
                     <TouchableOpacity>
                        <Text style = {{fontSize: 12, marginLeft:10}}>
                        NAV BAR 8
                    </Text>
                    </TouchableOpacity>
                    </View> 
    
             
           
            </ScrollView>
        </View> 
    )
}
