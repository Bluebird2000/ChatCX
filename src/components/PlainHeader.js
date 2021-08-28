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

const PlainHeader = ({ arrowBack, title }) => {
  const navigation = useNavigation();
  return(
    <View style={{ ...styles.container }}>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        { arrowBack && 
          <TouchableOpacity style={{ width: 18, height: 18 }}>
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

export default PlainHeader;