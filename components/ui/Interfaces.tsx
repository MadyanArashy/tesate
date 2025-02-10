import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useNavigation } from 'expo-router';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`w-full flex-1 flex-row justify-between items-center`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color={'black'} style={tw`p-2`} />
      </TouchableOpacity>
      <Ionicons name="search" size={32} color={'black'} style={tw`p-2`} />
    </View>
  )
}

export {
  Header,
}