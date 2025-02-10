import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialCommunityIcons, Ionicons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react'
import tw from 'twrnc';

type SelectableButtonProps = {
  text: string,
  selected?: boolean,
  style?: any,
  textStyle?: any,
  onPress?: () => void,
  colorScheme?: 'primary' | 'dark' | 'light' | 'transparent' | 'red',
  icon ?: {
    family: string;
    name: any;
    size: number;
  }
}
const SelectableButton = ({ text, selected, style, textStyle, onPress, colorScheme, icon }: SelectableButtonProps) => {
  const renderIcon = () => {
    if (icon) {
      switch (icon.family) {
        case 'AntDesign':
          return <AntDesign name={icon.name} size={icon.size}style={tw`${selected ? 'text-white' : 'text-black'}`} />;
        case 'MaterialCommunityIcons':
          return <MaterialCommunityIcons name={icon.name} size={icon.size}style={tw`${selected ? 'text-white' : 'text-black'}`} />;
        case 'Ionicons':
          return <Ionicons name={icon.name} size={icon.size}style={tw`${selected ? 'text-white' : 'text-black'}`} />;
        case 'Entypo':
          return <Entypo name={icon.name} size={icon.size}style={tw`${selected ? 'text-white' : 'text-black'}`} />;
        case 'Feather':
          return <Feather name={icon.name} size={icon.size}style={tw`${selected ? 'text-white' : 'text-black'}`} />;
        default:
          return <FontAwesome name={'question'} size={icon.size}style={tw`${selected ? 'text-white' : 'text-black'}`} />;;
      }
    }
  }
  switch(colorScheme) {
    case 'dark':
      return (
      <TouchableOpacity style={[tw`${selected ? 'bg-gray-200' : 'bg-gray-800'} p-3 rounded-xl mr-4 flex-row items-center gap-10`, style]} onPress={onPress}>
        {renderIcon()}
        <Text style={[tw`${selected ? 'text-black' : 'text-white'}`, textStyle]}>{ text }</Text>
      </TouchableOpacity>
    );
    case 'light':
      return (
      <TouchableOpacity style={[tw`${selected ? 'bg-gray-800' : 'bg-gray-200'} p-3 rounded-xl mr-4 flex-row items-center gap-10`, style]} onPress={onPress}>
        {renderIcon()}
        <Text style={[tw`${selected ? 'text-white' : 'text-black'}`, textStyle]}>{ text }</Text>
      </TouchableOpacity>
    );
    case 'red':
      return (
      <TouchableOpacity style={[tw`${selected ? 'bg-red-800' : 'bg-red-300'} p-3 rounded-xl mr-4 flex-row items-center gap-10`, style]} onPress={onPress}>
        {renderIcon()}
        <Text style={[tw`${selected ? 'text-white' : 'text-black'}`, textStyle]}>{ text }</Text>
      </TouchableOpacity>
    );
    case 'transparent':
    return (
    <TouchableOpacity style={[tw`${selected ? 'border-green-500' : 'border-green-300'} border-2 p-3 rounded-xl mr-4 flex-row items-center gap-10`, style]} onPress={onPress}>
        {renderIcon()}
        <Text style={[tw`${selected ? 'text-white' : 'text-black'}`, textStyle]}>{ text }</Text>
      </TouchableOpacity>
    );
    case 'primary': default:
    return (
    <TouchableOpacity style={[tw`${selected ? 'bg-green-500' : 'bg-green-300'} p-3 rounded-xl mr-4 flex-row items-center gap-10`, style]} onPress={onPress}>
        {renderIcon()}
        <Text style={[tw`${selected ? 'text-white' : 'text-black'}`, textStyle]}>{ text }</Text>
      </TouchableOpacity>
    );
  }
}

export default SelectableButton