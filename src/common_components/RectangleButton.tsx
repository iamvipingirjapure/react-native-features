import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const RectangleButton = ({ text, handleOnPress,backgroundColor }: {text:any,handleOnPress:any,backgroundColor:string}) => {
  return (
    <TouchableOpacity
      style={{
        height: s(62),
        // maxWidth: s(372),
        width: '100%',
        backgroundColor,
        borderRadius: s(12),
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={handleOnPress}
    >
      <Text style={{ color: '#FFFFFF', fontSize: s(14), fontWeight: 'bold' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default RectangleButton;

const styles = StyleSheet.create({});
