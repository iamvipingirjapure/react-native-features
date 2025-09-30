import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, vs } from 'react-native-size-matters';
import { Routes } from '../../../navigations/Routes';
import RectangleButton from '../../../common_components/RectangleButton';
const data = [
  {
    id: 1,
    imageUrl: '',
    headText: 'All your favorites',
    subText:
      'Get all your loved foods in one once place, you just place the orer we do the rest',
    isLast: false,
  },
  {
    id: 2,
    imageUrl: '',
    headText: 'All your favorites',
    subText:
      'Get all your loved foods in one once place, you just place the orer we do the rest',
    isLast: false,
  },
  {
    id: 3,
    imageUrl: '',
    headText: 'Order from choosen chef',
    subText:
      'Get all your loved foods in one once place, you just place the orer we do the rest',
    isLast: false,
  },
  {
    id: 4,
    imageUrl: '',
    headText: 'Free delivery offers',
    subText:
      'Get all your loved foods in one once place, you just place the orer we do the rest',
    isLast: true,
  },
];
const OnboardingScreen = ({ navigation }: any) => {
  const [active, setActive] = useState(1);
  const handleOnPress = () => {
    if (active !== data.length) {
      setActive(prev => prev + 1);
    } else {
      navigation.navigate(Routes.LoginScreen);
      setActive(1);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: s(40),
        paddingHorizontal: s(10),
      }}
    >
      <Image
        style={{
          height: 292,
          width: 240,
          backgroundColor: '#98A8B8',
          borderRadius: 20,
        }}
      />
      <Text style={{ fontSize: s(24), fontWeight: 900, color: '#32343E' }}>
        {data[active - 1]?.headText}
      </Text>
      <Text
        style={{
          fontSize: s(16),
          fontWeight: 'regular',
          color: '#646982',
          textAlign: 'center',
        }}
      >
        Get all your loved foods in one once place, you just place the orer we
        do the rest
      </Text>
      <View style={{ flexDirection: 'row', marginVertical: vs(20) }}>
        {data.map(item => (
          <View
            key={item.id}
            style={{
              height: 10,
              width: 10,
              backgroundColor: item.id === active ? '#FF7622' : '#FFE1CE',
              marginHorizontal: 10,
              borderRadius: 50,
            }}
          />
        ))}
      </View>
      <RectangleButton
        text={active !== data.length ? 'NEXT' : 'GET STARTED'}
        handleOnPress={handleOnPress}
        backgroundColor={'#FF7622'}
      />
      {active !== data.length && (
        <TouchableOpacity
          style={{
            height: s(62),
            maxWidth: s(372),
            width: '100%',
            borderRadius: s(12),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{ color: '#646982', fontSize: s(14), fontWeight: 'bold' }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
