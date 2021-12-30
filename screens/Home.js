import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'
import FoodCard from '../components/FoodCard'
export default function Home() {
    return (
        <SafeAreaView style={{backgroundColor: "#eee"}}>
            <View style = {{backgroundColor: "white"}}>
                <Header/>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <FoodCard/>
            </ScrollView>

            


        </SafeAreaView>
    )
}
