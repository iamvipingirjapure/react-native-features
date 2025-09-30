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
import {
  addToCart,
  clearCart,
  decreaseQnty,
  removeFromCart,
} from '../redux/slices/CartSlice';
import { Ionicons } from '@react-native-vector-icons/ionicons';
const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const total = cart.cart
    .map((item: any) => item.price * item.qnty)
    .reduce((sum: number, num: number) => {
      return sum + num;
    }, 0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Cart Total is {Math.round(total)} $ </Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 30,
            backgroundColor: 'skyblue',
            alignSelf: 'flex-end',
          }}
          onPress={() => dispatch(clearCart())}
        >
          <Text> Clear Cart </Text>
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          numColumns={2}
          data={cart.cart}
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
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  {product.item.price} ${' '}
                </Text>
                <Text>{product.item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                  }}
                >
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      borderRadius: 30,
                      backgroundColor: 'skyblue',
                    }}
                    onPress={() =>
                      product.item?.qnty === 1
                        ? dispatch(removeFromCart(product.item))
                        : dispatch(decreaseQnty(product.item))
                    }
                  >
                    <Text> - </Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16, alignItems: 'center' }}>
                    {product.item?.qnty}
                  </Text>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      borderRadius: 30,
                      backgroundColor: 'skyblue',
                    }}
                    onPress={() => dispatch(addToCart(product.item))}
                  >
                    <Text> + </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: 'center' }}>No items in the cart</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
