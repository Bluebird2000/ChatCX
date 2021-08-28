import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import { Modalize } from 'react-native-modalize';

import * as Animatable from 'react-native-animatable';
import { Header, MessagesQueList } from '../../components';
import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants";

const Messages = () => {

  const modalizeRef = React.useRef();
  const onLongPressmodalizeRef = React.useRef();

  const [ messagesQue, setMessagesQue ] = React.useState(dummyData.messageList)
    function renderMessagesHistory() {
      return(
        <MessagesQueList
          customContainerStyle={{ ...styles.shadow }}
          messagesQue={ messagesQue }
          onLongPressAction = { onLongPressmodalizeRef }
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

        { renderMessagesHistory() }

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

        {/* On Long press Modalize Action */}

        <Modalize
          modalHeight={ SIZES.height / 2 }
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', opacity: 1 }}
          modalStyle={{ backgroundColor: COLORS.white, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={ SIZES.height / 2 } 
          ref={onLongPressmodalizeRef}
          >
          <Animatable.View animation="slideInLeft" style={{
            marginVertical: SIZES.margin * 1.4, 
            marginHorizontal: SIZES.margin / 2
          }}>
            <TouchableOpacity style={{ ...styles.modalizeView }}>
              <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>Select All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.modalizeView, backgroundColor: COLORS.lightGrey }}>
              <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>Mute Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.modalizeView }}>
              <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>Block</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.modalizeView }}>
              <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>Mark as Read</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.modalizeView }}>
              <Text style={{ ...FONTS.body3, fontWeight: '500', color: COLORS.textPrimary }}>Delete</Text>
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

export default Messages;