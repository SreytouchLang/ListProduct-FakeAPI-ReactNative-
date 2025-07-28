// import React from 'react';
// import ProductList from './screens/ProductList';

// export default function App() {
//   return <ProductList />;
// }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './screens/ProductList';
import ProductDetail from './screens/ProductDetail';
import { Product } from './types/product';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet,
//   SafeAreaView,
//   Image,
// } from 'react-native';

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
// };

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const renderItem = ({ item }: { item: Product }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
//         <Text style={styles.price}>${item.price}</Text>
//       </View>
//     </View>
//   );

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.center}>
//         <ActivityIndicator size="large" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={{ padding: 10 }}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     flexDirection: 'row',
//     gap: 10,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     alignSelf: 'center',
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: 4,
//   },
//   price: {
//     color: '#2e86de',
//     fontWeight: '600',
//   },
// });

