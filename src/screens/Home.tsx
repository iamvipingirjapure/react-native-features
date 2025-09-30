import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { getAllProducts } from '../redux/slices/ProductSlice';
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addToCart } from '../redux/slices/CartSlice';
import { Ionicons } from '@react-native-vector-icons/ionicons';
const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.product);
  const cart = useAppSelector(state => state.cart);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // console.log('Products-------',state.products)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
      >
        <Text>All Products</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 10 }}
        >
          <Ionicons name="cart-outline" size={32} />
          <Text style={{ fontSize: 15 }}>{cart?.cart?.length ?? 0}</Text>
        </TouchableOpacity>
      </View>
      {state.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 120,
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={state.products}
          renderItem={(product: any) => {
            return (
              <View
                style={{
                  height: 300,
                  width: 180,
                  borderWidth: 1,
                  margin: 10,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Image
                  source={{
                    uri: product.item.image,
                  }}
                  resizeMode="center"
                  style={{ height: 140, width: 'auto' }}
                />
                <Text style={{fontSize:16,fontWeight:600}}>{product.item.price} $ </Text>
                <Text>{product.item.title}</Text>
                <TouchableOpacity
                  style={{
                    marginTop: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 30,
                    backgroundColor: 'skyblue',
                  }}
                  onPress={() => dispatch(addToCart(product.item))}
                >
                  <Text>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          ListEmptyComponent={() => <ActivityIndicator />}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
