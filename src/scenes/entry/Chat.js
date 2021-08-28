import React, { useState, useCallback, useEffect } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import * as Animatable from 'react-native-animatable';
import { Modalize } from 'react-native-modalize';
import { Header } from '../../components';
import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants";

const Chat = () => {

  const modalizeRef = React.useRef()

  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Wobbi',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Awesome Chat',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.primary,
          }
        }}
      />
    )
  }

    return (
      <>
        <SafeAreaView 
          // style={{ backgroundColor: COLORS.white }}
        >
        {/* Header Section Here */}
        <Header arrowBack title="Messages" search toggle = { modalizeRef } />
        </SafeAreaView>

        <GiftedChat
          messages={messages}
          renderBubble={renderBubble}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          textInputStyle={{ ...FONTS.body4 }}
        />
        
        <Modalize
          modalHeight={ SIZES.height / 2.4 }
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', opacity: 1 }}
          modalStyle={{ backgroundColor: COLORS.white, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={ SIZES.height / 2.4 } 
          ref={modalizeRef}
          >
          <Animatable.View animation="slideInLeft" View style={{
            marginVertical: SIZES.margin * 1.4, 
            marginHorizontal: SIZES.margin / 2
          }}>
            <TouchableOpacity style={{ ...styles.modalizeView }}>
              <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>New Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.modalizeView, backgroundColor: COLORS.lightGrey }}>
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
 shadow: {
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.30,
  shadowRadius: .65,

  elevation: 8,
  },
  modalizeView: {
    marginVertical: SIZES.margin / 4, 
    paddingVertical: SIZES.padding / 1.2,
    paddingHorizontal: SIZES.padding / 2, 
    borderRadius: SIZES.radius * 2 
  }
})

export default Chat;