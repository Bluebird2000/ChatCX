import React from 'react';

import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
 } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, FONTS, icons } from "../constants";

const Header = ({ arrowBack, title, search, toggle }) => {
  const navigation = useNavigation();

  return(
    <View style={{ ...styles.container }}>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        { arrowBack && 
          <TouchableOpacity style={{ width: 20, height: 20 }}>
            <Image 
              source={icons.arrowBack}
              resizeMode="contain" 
              style={{ width: '100%', height: '100%'}}
            />
          </TouchableOpacity>
        }
        <Text style={{
          ...FONTS.body3, fontWeight: '600', marginLeft: SIZES.margin / 1.7
        }}>{ title }</Text>

      </View>

      <View style={{ flexDirection: 'row' }}>
        { search && 
          <TouchableOpacity style={{  width: 20, height: 20 }}>
            <Image source={icons.search} resizeMode="contain" style={{ width: '100%', height: '100%'}} />
          </TouchableOpacity>
        }

         { toggle && 
          <TouchableOpacity
          onPress={() => toggle.current?.open()}
           style={{  width: 20, height: 20, marginLeft: SIZES.margin / 1.7 }}>
            <Image source={icons.toggle} resizeMode="contain" style={{ width: '100%', height: '100%'}} />
          </TouchableOpacity>
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: COLORS.white,
    borderBottomColor: COLORS.border,
    borderBottomWidth: 2,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding
  }
})

export default Header;