import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HeadingText = ({ text, fontSize = 22 }: {text:string,fontSize:number}) => {
  return (
    <Text style={{ fontSize, fontWeight: 'regular', color: '#32343E' }}>
      {text.toLocaleUpperCase()}
    </Text>
  );
};

export default HeadingText;

const styles = StyleSheet.create({});
