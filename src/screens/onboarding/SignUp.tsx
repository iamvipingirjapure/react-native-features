import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, vs } from 'react-native-size-matters';
import HeadingText from '../../common_components/HeadingText';
import OpenEyeIcon from '../../../assets/svg/OpenEyeIcon';
import CloseEyeIcon from '../../../assets/svg/CloseEyeIcon';
import RectangleButton from '../../common_components/RectangleButton';
import BackIcon from '../../../assets/svg/BackIcon';
import { Routes } from '../../navigations/Routes';

const SignUp = ({ navigation }: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121223' }}>
      <ScrollView>
        <Pressable
          onPress={() => navigation.navigate(Routes.LoginScreen)}
          style={{
            height: s(45),
            width: s(45),
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 60,
            position: 'absolute',
            left: s(12),
            top: s(12),
          }}
        >
          <BackIcon />
        </Pressable>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: s(30),
            fontWeight: 'bold',
            marginTop: s(60),
            textAlign: 'center',
          }}
        >
          Sign Up
        </Text>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: s(16),
            fontWeight: 'regular',
            textAlign: 'center',
            marginBottom: s(40),
          }}
        >
          Please sign in to your existing account
        </Text>
        <View
          style={{
            borderWidth: 1,
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderTopEndRadius: s(22),
            borderTopStartRadius: s(22),
            padding: s(20),
          }}
        >
          <HeadingText text="name" fontSize={16} />
          <TextInput
            inputMode="text"
            style={{
              height: s(62),
              backgroundColor: '#e8eaeeff',
              marginTop: s(10),
              marginBottom: s(20),
              borderRadius: 12,
              fontSize: s(17),
              paddingHorizontal: s(20),
              color: '#32343E',
            }}
            placeholder="Enter your name"
            placeholderTextColor={'#A0A5BA'}
          />
          <HeadingText text="email" fontSize={16} />
          <TextInput
            inputMode="email"
            style={{
              height: s(62),
              backgroundColor: '#e8eaeeff',
              marginTop: s(10),
              marginBottom: s(20),
              borderRadius: 12,
              fontSize: s(17),
              paddingHorizontal: s(20),
              color: '#32343E',
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={'#A0A5BA'}
          />
          <HeadingText text="Password" fontSize={16} />
          <View
            style={{
              marginVertical: s(10),
              backgroundColor: '#e8eaeeff',
              borderRadius: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: s(20),
            }}
          >
            <TextInput
              inputMode="text"
              secureTextEntry={!isPasswordVisible}
              style={{
                height: s(62),
                backgroundColor: '#e8eaeeff',
                fontSize: s(17),
                color: '#32343E',
                borderRadius: 12,
                flex: 1,
              }}
              placeholder="* * * * * * *"
              placeholderTextColor={'#A0A5BA'}
            />
            {isPasswordVisible ? (
              <CloseEyeIcon
                color={'#B4B9CA'}
                style={{}}
                onPress={() => setIsPasswordVisible(prev => !prev)}
              />
            ) : (
              <OpenEyeIcon
                color={'#B4B9CA'}
                style={{}}
                onPress={() => setIsPasswordVisible(prev => !prev)}
              />
            )}
          </View>
          <HeadingText text="Re-type Password" fontSize={16} />
          <View
            style={{
              marginVertical: vs(10),
              backgroundColor: '#e8eaeeff',
              borderRadius: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: s(20),
              marginBottom: vs(20),
            }}
          >
            <TextInput
              inputMode="text"
              secureTextEntry={!isPasswordVisible}
              style={{
                height: s(62),
                backgroundColor: '#e8eaeeff',
                fontSize: s(17),
                color: '#32343E',
                borderRadius: 12,
              }}
              placeholder="* * * * * * *"
              placeholderTextColor={'#A0A5BA'}
            />
            {isPasswordVisible ? (
              <CloseEyeIcon
                color={'#B4B9CA'}
                style={{}}
                onPress={() => setIsPasswordVisible(prev => !prev)}
              />
            ) : (
              <OpenEyeIcon
                color={'#B4B9CA'}
                style={{}}
                onPress={() => setIsPasswordVisible(prev => !prev)}
              />
            )}
          </View>
          <RectangleButton
            backgroundColor="#FF7622"
            text={'SIGN UP'}
            handleOnPress={undefined}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
