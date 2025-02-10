import { Dimensions, Image, ImageProps, Text, View } from 'react-native';
import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import tw from 'twrnc';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type MenuProps = {
  thumbnail: ImageProps['source'],
  nama: string,
  desc: string,
  harga: string
}
const Menu = ({ thumbnail, nama, desc, harga }: MenuProps) => {
  return (
    <View style={[tw`rounded-xl shadow-lg p-4 bg-white flex my-3`,
      { width: windowWidth * 0.425}]}
      > 
      <Link href="/main/detail">
          <View style={tw`items-center px-10`}>
              <Image source={thumbnail} style={tw`w-35 h-35`}/>
          </View>
          <Text style={tw`font-bold`}>{ nama }</Text>
          <Text>{ desc }</Text>
          <View style={tw`flex-row justify-between items-center w-full`}>
              <Text style={tw`font-bold`}>Rp { harga }</Text>
              <AntDesign name='shoppingcart' size={24} style={tw`bg-green-500 p-2 rounded-xl`} />
          </View>
      </Link>
    </View>
  )
}

export default Menu