import { View, Text, Image, ImageProps } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';

type MenuProps = {
  sourceImage: ImageProps['source'],
  nama: string,
  desc: string,
  harga: string
}
const Menu = ({ sourceImage, nama, desc, harga }: MenuProps) => {
  return (
    <View style={tw`rounded-xl shadow-lg p-4 basis-[45%] px-2 my-5 bg-white flex`}>
        <View style={tw`items-center`}>
            <Image source={sourceImage} style={tw`w-35 h-35`}/>
        </View>
        <Text style={tw`font-bold`}>{ nama }</Text>
        <Text>{ desc }</Text>
        <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`font-bold`}>Rp { harga }</Text>
            <AntDesign name='shoppingcart' size={24} style={tw`bg-green-500 p-2 rounded-xl`} />
        </View>
    </View>
  )
}

export default Menu