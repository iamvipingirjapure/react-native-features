import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, vs } from 'react-native-size-matters';
import LocationPin from '../../../assets/svg/LocationPin';
import Geolocation from '@react-native-community/geolocation';
import { Routes } from '../../navigations/Routes';

const LocationAccessScreen = ({ navigation }: any) => {
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return true;
    }

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Code learning needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      return { error: 'Location permission denied' };
    }

    return new Promise(resolve => {
      Geolocation.getCurrentPosition(
        position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
          });
        },
        error => {
          Alert.alert('Geolocation error:', error.message);
          // Provide a more user-friendly error message based on error code
          let errorMessage = 'Unable to retrieve your location';
          if (error.code === 3) {
            // TIMEOUT
            errorMessage =
              'Location request timed out. Please check your GPS settings.';
          } else if (error.code === 1) {
            // PERMISSION_DENIED
            errorMessage = 'Location permission denied';
          } else if (error.code === 2) {
            // POSITION_UNAVAILABLE
            errorMessage = 'Location information unavailable';
          }
          resolve({ error: errorMessage });
        },
        // Increase timeout to 30 seconds and use low accuracy if needed to get faster results
        { enableHighAccuracy: false, timeout: 30000, maximumAge: 60000 },
      );
    });
  };

  const getLocation = async (retry = false) => {
    try {
      const result: any = await getCurrentLocation();
      if (result.error) {
        console.log(`Location error : ${result.error}`);
      }
      console.log('Current location:', result);
      //   setLocation(result)
      navigation.navigate(Routes.HomeScreen)
    } catch (err: any) {
      const errorMsg = err.message || 'Failed to get location';
      console.error('Location error:', errorMsg);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: s(10),
      }}
    >
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{}}
          style={{
            height: s(200),
            width: s(200),
            borderRadius: 400,
            backgroundColor: 'grey',
          }}
        />
      </View>
      <Pressable
        style={{
          height: s(62),
          width: '100%',
          backgroundColor: '#FF7622',
          borderRadius: s(12),
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 30,
        }}
        onPress={() => getLocation()}
      >
        <Text style={{ color: '#FFFFFF', fontSize: s(14), fontWeight: 'bold' }}>
          ACCESS LOCATION
        </Text>
        <LocationPin />
      </Pressable>
      <Text
        style={{
          color: '#646982',
          fontSize: s(16),
          fontWeight: 'regular',
          textAlign: 'center',
          marginTop: vs(40),
          flex: 1,
        }}
      >
        DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
      </Text>
    </SafeAreaView>
  );
};

export default LocationAccessScreen;

const styles = StyleSheet.create({});
