import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
const CheckInternet = ({isOnline,setIsOnline}:any) => {
  useEffect(() => {
     NetInfo.fetch().then(state => {
      console.log('First, is ' + (state.isConnected ? 'online' : 'offline'));
    });

    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Then, iaas ' + (state.isConnected ? 'online' : 'offline'));
    //   setIsOnline(state.isConnected)
      unsubscribe(); // remove listener after first event/
    });

    return () => {
      unsubscribe(); // cleanup on unmount
    };
  }, []);
  return (
    <View>
      <Text>CheckInternet {isOnline ? 'online' : 'no internet'}</Text>
    </View>
  );
};

export default CheckInternet;

const styles = StyleSheet.create({});
