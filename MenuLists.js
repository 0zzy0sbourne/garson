const Foods = [
    {
        description: "2 adet Hamburger eti, 3 katli özel ekmeği, cheddar peyniri",
        categoryName: "Fast-Food",
        restaurantName: "Besiktas Burger King",
        foodName: "Big King",
        foodImage: "https://www.burgerking.com.tr/cmsfiles/products/big-king-menu.png?v=177", 
        restaurantRating: "4.7", 
        workingHours: "09.00-01.30", 
        price: "32$",
        calories: "500,17",
        rating: "4.2",
        tab: "Delivery",
         
    },

    {
        foodName: "Whopper Menü",
        restaurantName: "Besiktas Burger King", 
        foodImage: "https://www.burgerking.com.tr/cmsfiles/products/whopper-menu.png?v=177", 
        price: "$30",  
        description: "Whopper® eti, büyük boy susamli sandviç ekmeği, salatalik turşusu, ", 
        calories: "675,47", 
    },

    {
        foodName: "Etli Barbekü Brioche Menü",
        foodImage: "https://www.burgerking.com.tr/cmsfiles/products/etli-barbeku-brioche-menu.png?v=177", 
        restaurantName: "Besiktas Burger King", 
        price: "$24", 
        description: "Whopper® eti, enfes brioche ekmeği, cheddar peyniri", 
        calories: "767,57", 
    },
    {
        foodName: "Double Texas Smokehouse Burger Menü", 
        foodImage: "https://www.burgerking.com.tr/cmsfiles/products/double-texas-smokehouse-burger-menu.png?v=177", 
        restaurantName: "Besiktas Burger King", 
        price: "$33", 
        description: "2 kat Whopper® eti, füme eti, barbekü sosu", 
        calories: "1111,80", 
    },
   
  
    {
        foodName: "Büyük Boy Pepperoni Pizza", 
        restaurantName: "Pizza Bulls",  
        foodImage: "https://cdn.yemeksepeti.com/ProductImages/TR_ISTANBUL/pizza_bulls/pepperoni_big.jpg", 
        description: "büyük boy pepperoni pizza", 
        calories:"567,23",
        price: "$29", 
    },
    {
        foodName: "Büyük Boy Pizza + 2 Adet Sos", 
        restaurantName: "Pizza Bulls", 
        foodImage: "https://cdn.yemeksepeti.com//ProductImages/TR_ISTANBUL/pizza_bulls/buyukboypizzaa_big.jpg", 
        price: "$41", 
        description: "büyük boy pizza + 2 adet dilediğin sos", 
        calories:  "497", 
    },

    {
        foodName: "Çitir Tavuk Menü",
        foodImage: "https://cdn.yemeksepeti.com//ProductImages/TR_ISTANBUL/pizza_bulls/citirtavukmenuu_big.jpg",
        restaurantName: "Pizza Bulls",
        description:"çitir tavuk ve elma patates menü" , 
        calories: "494,13", 
        price: "$43"
    }
    ,
    {
        foodName: "Macaroni Pizza", 
        foodImage: "https://cdn.getiryemek.com/restaurants/1581323800278_1125x522.jpeg",
        description: "peynirli, macaroni pizza", 
        restaurantName:  "Papa John's",
        calories: "375,43", 
        price: "$22",
    },
    {
        foodName: "BBQ Sos Tavuk Büyük", 
        foodImage: "https://media-cdn.tripadvisor.com/media/photo-s/1a/e9/dc/4c/barbeku-soslu-tavuklu.jpg",
        restaurantName: "Papa John's", 
        description: "barbekü soslu tavuklu büyük boy pizza",
        calories: "643,12", 
        price: "$33", 
    },
    {
        foodName: "Akdeniz Pizza", 
        foodImage: "https://cdn.getiryemek.com/products/1582792101790_500x375.png", 
        restaurantName: "Papa John's", 
        description: "zeytinli, sucuklu, salamli akdeniz pizza", 
        calories: "432,49" ,
        price: "$27", 
    },
    {
        foodName: "Quattro Fromaggi", 
        foodImage: "https://www.papajohns.com.tr/upload/big/image611e1ef09d4cf.jpg", 
        restaurantName: "Papa John's", 
        description: "salamli, sosisli, küçük boy italyan pizza", 
        calories: "344,45", 
        price: "$28", 
    },
    {
        foodName: "İzmir Bomba",
        foodImage: "https://cdn.yemeksepeti.com//restaurant/TR_ISTANBUL/cihan-pastaneleri-besiktas-visnezade-mah-akaretler/izmir-bomba_big.jpg",  
        restaurantName:"Cihan Pastaneleri", 
        description: "çikolatali, sicak izmir bomba", 
        calories: "475,34", 
        price: "$5", 
    },
    {
        foodName: "Makaron", 
        foodImage: "https://www.uzaypastanesi.com/images/category/mini_Untitled%20Capture0076_Todp.jpg", 
        restaurantName: "Cihan Pastaneleri",
        description: "çeşitli renklerde tatli makaron",
        calories: "120,34", 
        price: "$4", 
    },
    {
        foodName: "Tereyağli Kruvasan", 
        foodImage:  "https://www.uzaypastanesi.com/images/product/tereya%C4%9Fl%C4%B1%20kruvasan-min_5ytR.jpg", 
        restaurantName: "Cihan Pastaneleri",
        description: "bol tereyağli, sicak, çitir kruvasan", 
        calories: "230,345", 
        price: "$9",
    },
     {
        foodName: "Simit", 
        foodImage:  "https://iasbh.tmgrup.com.tr/6c39a4/650/344/0/145/1152/749?u=https://isbh.tmgrup.com.tr/sbh/2020/02/28/citir-citir-simit-tarifi-essiz-lezzetiyle-gevrek-simit-nasil-yapilir-1582879335217.jpg", 
        restaurantName: "Panista",
        description: "çitir gevrek simit", 
        calories: "45,34", 
        price: "$2",
    },
     {
        foodName: "Baget Ekmeği", 
        foodImage: "https://panista.com.tr/wp-content/uploads/2021/05/baget-897x897.jpg",
        restaurantName: "Panista", 
        price: "$3", 
        description: "1/3 baget ekmeği", 
        calories: "100",
    },
      {
        foodName: "Çikolatali Kruvasan",
        restaurantName: "Panista", 
        foodImage: "https://panista.com.tr/wp-content/uploads/2021/01/nutelallikruvasan-897x505.jpg", 
        price: "$5" ,
        description: "çikolatali çitir kruvasan", 
        calories: "150",
    },
     {
        foodName: "Tereyağli Kruvasan", 
        foodImage:  "https://www.uzaypastanesi.com/images/product/tereya%C4%9Fl%C4%B1%20kruvasan-min_5ytR.jpg", 
        restaurantName: "Panista",
        description: "bol tereyağli, sicak, çitir kruvasan", 
        calories: "230,345", 
        price: "$9",
    },
 


];

export default Foods; 