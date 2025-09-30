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
import FBIcon from '../../../assets/svg/FBIcon';
import { Routes } from '../../navigations/Routes';
import { LoginAuth } from '../../redux/slices/AuthSlice';
import { useAppDispatch } from '../../redux/Hooks';

const Login = ({ navigation }: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [user, setUser] = useState({
    email: 'john_doe',
    password: 'pass123',
  });

  const dispatch = useAppDispatch();
  const handleChangeText = (name: string, value: string) => {
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const onLogin = async () => {
    // navigation.navigate(Routes.LocationAccessScreen)
    console.log(user);
    const userInfo = await dispatch(
      LoginAuth({
        username: 'mor_2314',
        password: '83r5^_',
      }),
    );

    userInfo.payload?.token && navigation.navigate(Routes.LocationAccessScreen);
    console.log(userInfo.payload?.token);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121223' }}>
      <ScrollView>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: s(30),
            fontWeight: 'bold',
            marginTop: s(60),
            textAlign: 'center',
          }}
        >
          Log In
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
          <HeadingText text="email" fontSize={16} />
          <TextInput
            inputMode="email"
            value={user.email}
            onChangeText={value => handleChangeText('email', value)}
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
              value={user.password}
              onChangeText={value => handleChangeText('password', value)}
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: vs(20),
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={{
                  height: s(20),
                  width: s(20),
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: '#E3EBF2',
                }}
              />
              <Text
                style={{
                  color: '#7E8A97',
                  marginLeft: s(10),
                  fontSize: s(13),
                  fontWeight: 'regular',
                }}
              >
                Remember Me
              </Text>
            </View>
            <Text
              style={{
                color: '#FF7622',
                fontWeight: 'regular',
                fontSize: s(14),
              }}
            >
              Forgot Password
            </Text>
          </View>
          <RectangleButton
            backgroundColor="#FF7622"
            text={'LOG IN'}
            handleOnPress={onLogin}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 10,
              alignItems: 'center',
              marginVertical: vs(30),
            }}
          >
            <Text
              style={{
                color: '#646982',
                fontWeight: 'regular',
                fontSize: s(16),
              }}
            >
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate(Routes.SignUpScreen)}>
              <Text
                style={{
                  color: '#FF7622',
                  fontWeight: 'bold',
                  fontSize: s(14),
                }}
              >
                SIGN UP
              </Text>
            </Pressable>
          </View>
          <Text
            style={{
              color: '#646982',
              fontWeight: 'regular',
              fontSize: s(16),
              alignSelf: 'center',
            }}
          >
            Or
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: s(40),
              marginVertical: s(10),
            }}
          >
            <FBIcon />
            <FBIcon />
            <FBIcon />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
