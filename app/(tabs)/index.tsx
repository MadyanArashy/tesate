import Menu from '@/components/Menu';
import SelectableButton from '@/components/SelectableButton';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`mx-5`}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={tw`text-center text-xl my-7`}>Bambu Apus, Jakarta Timur</Text>
        <Text style={tw`text-2xl font-bold mb-7`}>Sore, Mang Saswi</Text>
      </View>
      <TextInput
        style={tw`w-full h-10 border rounded-lg`}
        placeholder='Cari Kesukaan Kamu!'
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-3`}>
        <SelectableButton text="SelectableButton" selected/>
        <SelectableButton text="Makanan" />
        <SelectableButton text="Minuman" />
        <SelectableButton text="Cemilan" />
        <SelectableButton text="Mukbang" />
        <SelectableButton text="Porsi kuli" />
        <SelectableButton text="Hikmah" />
      </ScrollView>
        
      <View style={tw`flex-row justify-between max-w-full`}>
        <Menu thumbnail={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate ayam dengan ayam dari neraka 🔥" harga="15.000" />
        <Menu thumbnail={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate babi dengan babi dari laut (jd halal)" harga="15.000" />
      </View>
      <View style={tw`flex-row justify-between`}>
        <Menu thumbnail={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate sapia 🔥" harga="15.000" />
        <Menu thumbnail={require('../../assets/images/sate.png')} nama="Sate Ayam Cik" desc="Sate ayam dengan daging ayam dari neraka 🔥" harga="15.000" />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}