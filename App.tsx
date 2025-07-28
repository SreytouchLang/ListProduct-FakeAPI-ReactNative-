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
