import { View, Text, SafeAreaView } from "react-native";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

export default function App() {
  return (
    <SafeAreaView>
        <RestaurantDetail/>
        
    </SafeAreaView>
    
    
  );
}
