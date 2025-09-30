import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../../assets/svg/Logo';
import SplashBottom from '../../../assets/svg/SpalshBottom';
import SplashTop from '../../../assets/svg/SplashTop';
import { Routes } from '../../navigations/Routes';

const SplashScreen = ({ navigation }: any) => {
  const { colors } = useTheme();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.OnboardingScreen);
    }, 1000);
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Logo height={200} />
      <SplashTop
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
        }}
      />
      <SplashBottom
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          right: 0,
          bottom: 0,
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
