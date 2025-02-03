import Menu from '@/components/Menu';
import Rekomendasi from '@/components/Rekomendasi';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`mx-5`}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={tw`text-center text-xl`}>Bambu Apus, Jakarta Timur</Text>
        <Text style={tw`text-xl font-bold mt-5`}>Sore, Mang Saswi</Text>
      </View>
      <TextInput
          style={tw`w-full h-10 border rounded-lg`}
          placeholder='Cari Kesukaan Kamu!'
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
          <Rekomendasi text="Rekomendasi" />
          <Rekomendasi text="Makanan" />
          <Rekomendasi text="Minuman" />
          <Rekomendasi text="Cemilan" />
          <Rekomendasi text="Mukbang" />
          <Rekomendasi text="Porsi kuli" />
          <Rekomendasi text="Hikmah" />
        </ScrollView>
        
          <View style={tw`flex-row justify-between`}>
            <Menu sourceImage={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate ayam dengan daging ayam dari neraka 🔥" harga="15.000" />
            <Menu sourceImage={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate ayam dengan daging ayam dari neraka 🔥" harga="15.000" />
          </View>
          <View style={tw`flex-row justify-between`}>
            <Menu sourceImage={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate ayam dengan daging ayam dari neraka 🔥" harga="15.000" />
            <Menu sourceImage={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate ayam dengan daging ayam dari neraka 🔥" harga="15.000" />
          </View>
        </ScrollView>
        
    </SafeAreaView>
  );
}