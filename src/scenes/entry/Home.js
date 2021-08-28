import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    SafeAreaView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Modalize } from 'react-native-modalize';

import { Header } from '../../components';
import { COLORS, SIZES, FONTS, icons } from "../../constants"

const Home = (props) => {
  
    const modalizeRef = React.useRef()

    return (
      <>
        <SafeAreaView 
          // style={{ backgroundColor: COLORS.white }}
        >
        {/* Header Section Here */}
        <Header arrowBack title="Messages" search toggle = { modalizeRef } />

        </SafeAreaView>

          <View style={{ height: SIZES.height / 1.4, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("Messages") }
            >
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 200, height: 100
              }}>
                <Image source={icons.chat} resizeMode="contain" style={{ flex: 1, width: '100%', height: '100%'}} />

                <Text style={{ ...styles.entry, ...FONTS.body3 }}>
                  Start chat with others
                </Text>
              </View>

            </TouchableOpacity>
          </View>

          <Modalize
            modalHeight={ SIZES.height / 2.4 }
            overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', opacity: 1 }}
            modalStyle={{ backgroundColor: COLORS.white, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
            snapPoint={ SIZES.height / 2.4 } 
            ref={modalizeRef}
            >
            <Animatable.View animation="slideInLeft" style={{
              marginVertical: SIZES.margin * 1.4, 
              marginHorizontal: SIZES.margin / 2
            }}>
              <TouchableOpacity style={{ ...styles.modalizeView }}>
                <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>New Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Group")} style={{ ...styles.modalizeView, backgroundColor: COLORS.lightGrey }}>
                <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>New Group</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.modalizeView }}>
                <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.modalizeView }}>
                <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>Settings</Text>
              </TouchableOpacity>
            </Animatable.View>
          </Modalize>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
      // alignItems: 'center',
      // justifyContent: 'center'
  },
 entry: {
   color: COLORS.textSecondary,
   marginTop: SIZES.margin / 2
 },
 modalizeView: {
  marginVertical: SIZES.margin / 4, 
  paddingVertical: SIZES.padding / 1.2,
  paddingHorizontal: SIZES.padding / 2, 
  borderRadius: SIZES.radius * 2 
}
})

export default Home;