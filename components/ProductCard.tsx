import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Product } from '../types/product';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    color: 'green',
  },
});
