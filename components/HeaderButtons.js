import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'

export default function HeaderButtons(props) {
    return (
        <SafeAreaView>
        <TouchableOpacity 
        style = {{
            backgroundColor: props.activeTab === props.text ? 'rgb( 247, 80, 0)' : "rgb (189,189, 189, 0.8)", 
            paddingVertical: 6, 
            paddingHorizontal: 16,
            borderRadius: 30, 
        }}
        onPress = {() => props.setActiveTab(props.text)}
        
        >
            <Text style = {{
                color: props.activeTab === props.text ? "white" : "rgb (246 ,246, 246, 0.8)", 
                }}>{props.text}</Text>
        </TouchableOpacity>
        </SafeAreaView>
      
    )
}
