import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import api from '../services/api';
import { API_URLS } from '../constants/urls';
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export default function ProductList() {
  // <-- Move hook inside the component
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    api
      .get(API_URLS.PRODUCTS)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.toggle}>
        <Button
          title={`Switch to ${isGrid ? 'List' : 'Grid'} View`}
          onPress={() => setIsGrid(!isGrid)}
        />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={isGrid ? 2 : 1}
        key={isGrid ? 'g' : 'l'} // forces FlatList to re-render layout
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            style={isGrid ? styles.gridItem : styles.listItem}
          >
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
        // renderItem={({ item }) => (
        //   <View style={isGrid ? styles.gridItem : styles.listItem}>
        //     <ProductCard product={item} />
        //   </View>
        // )}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  toggle: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
  },
  listItem: {
    width: '100%',
    marginBottom: 5,
  },
});
