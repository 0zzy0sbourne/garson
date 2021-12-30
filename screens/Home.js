import React, {useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'
import FoodCard from '../components/FoodCard'
import { Divider } from 'react-native-elements'
import BottomNav from '../components/BottomNav'
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Home() {

    const [activeTab, setActiveTab] = useState("Delivery"); 
    
    return (
        <SafeAreaProvider>
            
            <SafeAreaView style={{backgroundColor: "#eee"}}>
                <View style = {{backgroundColor: "white"}}>
                    <Header activeTab={activeTab} setActiveTab={setActiveTab}/>   
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Categories/>
                    <FoodCard activeTab = {activeTab} setActiveTab = {setActiveTab}/>
                </ScrollView>
                <Divider width={1} />
                <BottomNav/>

            </SafeAreaView>
        
        </SafeAreaProvider>
    )
}
