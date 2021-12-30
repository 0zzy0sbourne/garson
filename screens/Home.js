import React, {useState} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'
import FoodCard from '../components/FoodCard'

export default function Home() {

    const [activeTab, setActiveTab] = useState("Delivery"); 
    
    return (
        <SafeAreaView style={{backgroundColor: "#eee"}}>
            <View style = {{backgroundColor: "white"}}>
                <Header activeTab={activeTab} setActiveTab={setActiveTab}/>   
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <FoodCard activeTab = {activeTab} setActiveTab = {setActiveTab}/>
            </ScrollView>

            


        </SafeAreaView>
    )
}
