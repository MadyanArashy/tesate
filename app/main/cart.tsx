import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native'
import tw from 'twrnc'

import Line from '@/components/Line'
import { Header } from '@/components/ui/Interfaces'
import SelectableButton from '@/components/SelectableButton'

function cart() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex flex-col mt-10 mx-4 gap-3`}>
          <Header/>
          <Text style={tw`text-3xl font-bold`}>
            Pesanan Kamu
          </Text>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-col gap-2`}>
              <Text>2x Sate Ayam Cik</Text>
              <Text>Biaya Aplikasi</Text>
              <Text>Biaya Pesan Antar</Text>
            </View>
            <View style={tw`flex-col gap-2`}>
              <Text style={tw`text-right`}>Rp.30.000</Text>
              <Text style={tw`text-right`}>Rp.2.000</Text>
              <Text style={tw`text-right`}>Rp.5.000</Text>
            </View>
          </View>
          <Line/>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`font-bold`}>
              Total Biaya
            </Text>
            <Text style={tw`text-right`}>
              Rp.37.000
            </Text>
          </View>
          <View style={tw`flex-row items-center justify-between mt--1`}>
            <Text style={tw`text-xs`}>
              Estimasi Waktu Antar
            </Text>
            <Text style={tw`text-right text-xs`}>
              30-35 mins
            </Text>
          </View>
          <SelectableButton text='Bayar Cash Aja' textStyle={tw`text-center font-bold text-lg`} icon={{ family: 'MaterialCommunityIcons', name: 'cash', size: 48 }} colorScheme='light' selected/>
          <SelectableButton text='Credit/Debit' textStyle={tw`text-center font-bold text-lg`} icon={{ family: 'AntDesign', name: 'creditcard', size: 48 }} colorScheme='primary' selected/>
          <SelectableButton text='QRIS' textStyle={tw`text-center font-bold text-lg`} icon={{ family: 'MaterialCommunityIcons', name: 'qrcode', size: 48 }} colorScheme='red' selected/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default cart