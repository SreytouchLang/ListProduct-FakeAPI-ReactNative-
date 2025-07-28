import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

export default function ProductDetail() {
  const route = useRoute<ProductDetailRouteProp>();
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>This is a placeholder description for "{product.title}".</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 15,
  },
  description: {
    textAlign: 'center',
    color: '#555',
  },
});
