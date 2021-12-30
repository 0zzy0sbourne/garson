import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'
export default function Home() {
    return (
        <SafeAreaView style={{backgroundColor: "#eee"}}>
            <View style = {{backgroundColor: "white"}}>
                <Header/>
            </View>

            <Categories/>
            


        </SafeAreaView>
    )
}
