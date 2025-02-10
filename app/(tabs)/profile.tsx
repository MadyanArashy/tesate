import { StyleSheet, Image, Platform, SafeAreaView, ScrollView , View} from 'react-native';
import tw from 'twrnc';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Header } from '@/components/ui/Interfaces';

export default function TabTwoScreen() {
  return (
   <SafeAreaView>
    <ScrollView>
      <View style={tw`flex flex-col mt-10 mx-4 gap-3`}>
        <Header/>
        
      </View>
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
