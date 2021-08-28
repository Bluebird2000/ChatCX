import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Switch,
    View,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import * as Animatable from 'react-native-animatable';

import { PlainHeader } from '../../components';
import { COLORS, SIZES, FONTS, icons } from "../../constants";

const GroupDetails = (props) => {

  const [ isEnabledNotification, setIsEnableNotificationd ] = React.useState(false);
  const [ isEnabledMedia, setIsEnabledMedia ] = React.useState(false);
  const [ isEnabledParticipant, setIsEnabledParticipant ] = React.useState(false);
  const [ isEnabledPublic, setIsEnabledPublic ] = React.useState(false);
  const [ isEnabledMonthly, setIsEnabledMonthly ] = React.useState(false);

  const toggleSwitchNotification = () => setIsEnableNotificationd(previousState => !previousState);
  const toggleSwitchMedia = () => setIsEnabledMedia(previousState => !previousState);
  const toggleSwitchParticipant = () => setIsEnabledParticipant(previousState => !previousState);
  const toggleSwitchPublic = () => setIsEnabledPublic(previousState => !previousState); 
  const toggleSwitchMonthly = () => setIsEnabledMonthly(previousState => !previousState);
  
    return (
      <>
        <SafeAreaView>
          <PlainHeader arrowBack title="Wobb Teams" />
        </SafeAreaView>
        <ScrollView>
        <View style={{ marginVertical: SIZES.margin / 2 }}>
          <View style={{  }}>
            <View style={{ ...styles.upload }}>
              <Image source={icons.usersgroup} style={{ width: '25%', height: '25%' }} />
            </View>
            <View style={{ ...styles.block, backgroundColor: COLORS.white }}>

            <Text style={{ ...styles.listView }}>Add Group Description</Text>

            </View>
          </View>

          <View style={{ marginTop: SIZES.margin }}>
            
            <View style={{ backgroundColor: COLORS.white }}>
            <View style={{ 
              ...styles.block, 
              alignItems: 'center',
              flexDirection: 'row', 
              justifyContent: 'space-between' 
            }}
            >
              <Text style={{ ...styles.listView, color: COLORS.primary }}>Media, Links and docs</Text>
              <Image source={icons.arrowRight} style={{ width: '10%', height: '40%' }} resizeMode="contain" />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
              <View style={{ ...styles.mediaView }}>
                <Image source={icons.user} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
              </View>

              <View style={{ ...styles.mediaView }}>
                <Image source={icons.userfour} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
              </View>
              
              <View style={{ ...styles.mediaView }}>
                <Image source={icons.userone} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
              </View>

              <View style={{ ...styles.mediaView }}>
                <Image source={icons.userfive} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
              </View>

              <View style={{ ...styles.mediaView }}>
                <Image source={icons.user} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
              </View>

              <View style={{ height: 100, width: 100, marginHorizontal: SIZES.margin / 2, marginBottom: SIZES.margin }}>
                <Image source={icons.usertwo} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
              </View>

            </ScrollView>
            </View>
          </View>

          <View style={{ height: 1, backgroundColor: COLORS.border, marginTop: SIZES.margin }}></View>

          <View style={{ backgroundColor: COLORS.white, paddingHorizontal: SIZES.padding / 4 }}>
            <View style={{ ...styles.block }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ ...styles.listView }}>Mute notification</Text>
                <Switch
                  trackColor={{ false: COLORS.white, true: "#8FA2ED" }}
                  thumbColor={isEnabledNotification ? COLORS.primary : COLORS.white}
                  ios_backgroundColor={ COLORS.lightGrey }
                  onValueChange={toggleSwitchNotification}
                  value={isEnabledNotification}
                />
              </View>
            </View>

            <View style={{ ...styles.block }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ ...styles.listView }}>Media Visibilty</Text>
                <Switch
                  trackColor={{ false: COLORS.white, true: "#8FA2ED" }}
                  thumbColor={isEnabledMedia ? COLORS.primary : COLORS.white}
                  ios_backgroundColor={ COLORS.lightGrey }
                  onValueChange={toggleSwitchMedia}
                  value={isEnabledMedia}
                />
              </View>

            </View>

            <View style={{ ...styles.block }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ ...styles.listView }}>Edit group info by app participants</Text>
              <Switch
                trackColor={{ false: COLORS.white, true: "#8FA2ED" }}
                  thumbColor={isEnabledParticipant ? COLORS.primary : COLORS.white}
                  ios_backgroundColor={ COLORS.lightGrey }
                onValueChange={toggleSwitchParticipant}
                value={isEnabledParticipant}
              />
            </View>

            </View>

            <View style={{ ...styles.block }}>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ ...styles.listView }}>Public/Private</Text>
              <Switch
                trackColor={{ false: COLORS.white, true: "#8FA2ED" }}
                  thumbColor={isEnabledPublic ? COLORS.primary : COLORS.white}
                  ios_backgroundColor={ COLORS.lightGrey }
                onValueChange={toggleSwitchPublic}
                value={isEnabledPublic}
              />
            </View>

            </View>

            <View style={{ ...styles.block }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ ...styles.listView }}>Monthly/One Time</Text>
              <Switch
                trackColor={{ false: COLORS.white, true: "#8FA2ED" }}
                thumbColor={isEnabledMonthly ? COLORS.primary : COLORS.white}
                ios_backgroundColor={ COLORS.lightGrey }
                onValueChange={toggleSwitchMonthly}
                value={isEnabledMonthly}
              />
            </View>
            </View>
          </View>


          <View style={{ backgroundColor: COLORS.white, marginVertical: SIZES.margin, paddingHorizontal: SIZES.padding / 4 }}>
            <View style={{ 
              ...styles.block, 
              alignItems: 'center',
              // borderWidth: 'transparent', 
              flexDirection: 'row', 
              justifyContent: 'space-between' 
            }}
            >
              <Text style={{ ...styles.listView, color: COLORS.primary, fontWeight: '500' }}> 1 participant</Text>
              <Image source={icons.searchPrimary} style={{ width: '10%', height: '40%' }} resizeMode="contain" />
            </View>
            <View style={{ ...styles.block }}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ ...styles.participantSection }}>
                  <Image source={icons.participant} style={{ width: '50%', height: '50%' }} />
                </View>
                <Text style={{ ...styles.listView }}>Add New Participants</Text>
              </View>
            </View>

            <View style={{ ...styles.block, marginVertical: SIZES.margin }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ ...styles.participantSection }}>
                  <Image source={icons.invite} style={{ width: '50%', height: '50%' }} />
                </View>
                <Text style={{ ...styles.listView }}>Invite Via Link</Text>
              </View>
            </View>

            <View style={{ ...styles.block, marginBottom: SIZES.margin }}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={ icons.user } style={{
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                }} 
                />
                <View>
                <Text style={{ ...styles.listView, marginVertical: SIZES.margin / 4 }}>Invite Via Link</Text>
                <Text style={{ ...FONTS.body5, paddingHorizontal: SIZES.padding / 2 }}>Nike Marketing Manager</Text>
                </View>
              </View>
            </View>

          </View>

          <TouchableOpacity style={{ ...styles.button }}>
            <Image source={icons.exit} style={{ width: '10%', height: '40%' }} resizeMode="contain" />
            <Text style={{ ...FONTS.body3, color: COLORS.black, fontWeight: '500', marginLeft: SIZES.margin / 4 }}>Exit Group </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.button, marginVertical: SIZES.margin }}>
            <Image source={icons.report} style={{ width: '10%', height: '40%' }} resizeMode="contain" />
            <Text style={{ ...FONTS.body3, color: COLORS.black, fontWeight: '500', marginLeft: SIZES.margin / 4 }}>Report Group </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upload: {
    backgroundColor: COLORS.grey,
    height: 300, 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  input: {
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    paddingHorizontal: SIZES.padding,
    flex: 0.8,
    ...FONTS.body3,
    color: COLORS.black,
  },
  block: {
    height: 70,
    justifyContent: 'center',
    // backgroundColor: 'red',
    borderBottomColor: COLORS.border,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 1
  },
  button: {
    flexDirection: 'row',
    backgroundColor: COLORS.white, 
    height: SIZES.margin * 2.4, 
    marginHorizontal: SIZES.margin / 2.8,
    borderRadius: SIZES.radius / 2, 
    // justifyContent: 'center',
    alignItems: 'center'
  },
  listView: {
    ...FONTS.body4, fontWeight: '500', 
    paddingHorizontal: SIZES.padding / 2,
    marginVertical: SIZES.margin / 2
  },
  participantSection: {
    width: 70, height: 70, borderRadius: 70,
    backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' 
  },
  mediaView: {
    height: 100, 
    width: 100, 
    marginHorizontal: SIZES.margin / 4, 
    marginBottom: SIZES.margin 
  }
})

export default GroupDetails;
