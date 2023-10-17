import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ButtonForm({...rest}) {
  return (
    <TouchableOpacity {...rest}>
      <Text>ButtonForm</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
