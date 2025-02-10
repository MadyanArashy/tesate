import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, } from 'react-native';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import tw from 'twrnc';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Link, useRouter } from 'expo-router';
import { Header } from '@/components/ui/Interfaces';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SelectableButton from '@/components/SelectableButton';

const detail = () => {
  
  const navigation = useNavigation();  
  const router = useRouter();

  const [amount, setAmount] = useState(0);
  const [harga, setHarga] = useState(0);

  const addAmount = () => {
    setAmount(amount + 1);
    setHarga(harga + 15000)
  };

  const takeAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setHarga(harga - 15000)
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex flex-col mt-10 mx-4 gap-3`}>
          <Header/>
          <Image source={require('../../assets/images/sate.png')} style={{ width: windowWidth * 0.9, height: windowWidth * 0.9, margin: 'auto' }} />
          <Text style={tw`text-3xl font-bold`}>Sate Ayam Cik</Text>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="pot-steam-outline" size={24} color="black" />
            <Text style={tw`text-gray-600`}>26 mins</Text>
          </View>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam nesciunt officia laudantium laborum voluptates praesentium necessitatibus, deserunt consequuntur. Perferendis cumque deleniti modi pariatur autem ut aut quae necessitatibus unde.</Text>
          <View style={tw`flex-row items-center justify-between`}>
            <SelectableButton text="Rp.15.000" selected/>
            <View style={tw`flex-row items-center`}>
              <SelectableButton text="—" selected style={tw`w-8`} onPress={takeAmount}/>
              <Text style={tw`text-center font-bold mr-3.5`}>{amount}</Text>
              <SelectableButton text="+" selected style={tw`w-8`} onPress={addAmount}/>
            </View>
          </View>
          <View style={tw`flex-row items-center justify-between`}>
            <SelectableButton text='Add to Cart' colorScheme='dark' style={tw`px-6`} textStyle={tw`font-semibold`} onPress={() => router.push('/main/cart')}/>
            <SelectableButton text='Pesan Sekarang!' colorScheme='dark' style={tw`px-6`} textStyle={tw`font-semibold`} onPress={() => router.push('/main/cart')}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default detail