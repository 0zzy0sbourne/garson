import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import GOOGLE_MAPS_APIKEY from "../@env"; 

export default function LocationSearch() {
    return (
        <View>
            
                <GooglePlacesAutocomplete
                    placeholder =  "Where from?"  
                    styles = {{
                        container: {
                            flex: 0,
                            marginTop: 5,
                            marginBottom: 5,  

                        }, 
                        textInput: {
                            fontSize: 18,
                        }, 
                    }}
                    fetchDetails = {true}
                    returnKeyType = {"search"}
                    enablePoweredByContainer = {false}
                    minLength = {2}
                    query = {{
                        key: null, 
                        language: "en", 

                    }}
                    nearbyPlacesAPI = "GooglePlacesSearch"
                    debounce = {400}
                />
        </View>
    )
}
