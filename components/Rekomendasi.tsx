import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';

type RekomendasiProps = {
  text: string
}
const Rekomendasi = ({ text }: RekomendasiProps) => {
  return (
    <TouchableOpacity style={tw`bg-green-500 p-3 rounded-xl mr-4`}>
      <Text style={tw`dark:text-white`}>{ text }</Text>
    </TouchableOpacity>
  )
}

export default Rekomendasi