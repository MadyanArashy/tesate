import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Header = () => {
  return (
    <View style={tw`w-full flex-1 flex-row justify-between items-center`}>
      <Link href="/(tabs)">
        <Ionicons name="arrow-back" size={32} color={'black'} style={tw`p-2`} />
      </Link>
      <Ionicons name="search" size={32} color={'black'} style={tw`p-2`} />
    </View>
  )
}

export {
  Header,
}