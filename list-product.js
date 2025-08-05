import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedProduct(item)}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>Category: {item.category}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {item.description}
          </Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <Text style={styles.rating}>
            ⭐ {item.rating.rate} ({item.rating.count} reviews)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
      />

      <Modal
        visible={selectedProduct !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <Image
                source={{ uri: selectedProduct?.image }}
                style={styles.modalImage}
                resizeMode="contain"
              />
              <Text style={styles.modalTitle}>{selectedProduct?.title}</Text>
              <Text style={styles.modalPrice}>${selectedProduct?.price}</Text>
              <Text style={styles.modalDescription}>{selectedProduct?.description}</Text>
            </ScrollView>
            <TouchableOpacity onPress={() => setSelectedProduct(null)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    gap: 12,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  price: {
    color: '#2e86de',
    fontWeight: '600',
    marginBottom: 2,
  },
  rating: {
    fontSize: 12,
    color: '#27ae60',
  },

  // model popup
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxHeight: '80%',
  },
  modalImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 16,
    color: '#2e86de',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    color: '#444',
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#2e86de',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
