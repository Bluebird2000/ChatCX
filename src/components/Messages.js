import React from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import { COLORS, SIZES, FONTS, icon, icons } from "../constants";

const MessagesQueList = ({ customContainerStyle, messagesQue, onLongPressAction }) => {

  const navigation = useNavigation()
  
  const renderItem = ({ item, index }) => {
    return(
      <TouchableOpacity 
      onPress={() => item.hour == '1 d' ? navigation.navigate('Group', { screen: 'GroupDetails'}) : navigation.navigate('Chat')}
      onLongPress={() => onLongPressAction.current?.open()}
      style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: SIZES.base
      }}>
        { item.icon ? 
          <Image source={ item.icon } style={{
            width: 70,
            height: 70,
            borderRadius: 70,
            // tintColor: COLORS.primary
          }} /> : 
          <View style={{ 
          backgroundColor: COLORS.lightPrimary, 
          width: 70,
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 70
          }}>
            <Text style={{ color: COLORS.primary, ...FONTS.body1 }}>A</Text>
          </View>
        }
        

        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.body4, fontWeight: '500' }}> 
            { item.name }
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: COLORS.textSecondary, fontFamily: "Poppins-Regular" }}> 
            { item.description }
            </Text>
            <View>
              <Text style={{ color: COLORS.textSecondary, fontFamily: "Poppins-Regular" }}> 
              { item.hour }
              </Text>
             { item.hour == '1 d' && 
             <View style={{ 
               backgroundColor: COLORS.primary, 
               borderRadius: 20, 
               width: 20,
               height: 20,
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <Text 
              style={{ 
                color: COLORS.white, 
                fontFamily: "Poppins-Regular",
                fontWeight: '600'
                }}> 2 
              </Text> 
            </View>
            }
            </View>
          </View>
        </View>

      </TouchableOpacity>
    )
  }
  return(
    <Animatable.View animation="slideInLeft" style={{
      ...styles.flatListBlock,
      ...customContainerStyle
    }}>
      {/* <Text style={{ ...FONTS.h3 }}> Transaction</Text> */}
      <FlatList 
        contentContainerStyle={{ marginTop: SIZES.radius }}
        scrollEnabled={ false }
        data={ messagesQue }
        keyExtractor={item => `${ item.id }`}
        renderItem={ renderItem }
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return(
            <View style={{ 
              height: .5, 
              width: '100%', 
              backgroundColor: COLORS.border, 
            }}></View>
          )
        }}
        
      />
      
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  flatListBlock: {
    padding: 20,
    borderBottomColor: COLORS.border,
    // borderBottomWidth: .2,
  }
})

export default MessagesQueList