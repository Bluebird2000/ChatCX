import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TextInput,
    View,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { PlainHeader } from '../../components';
import { COLORS, SIZES, FONTS, icons } from "../../constants"

const CreateGroup = (props) => {

  const [ publicStatus, setPublic ] = React.useState('');
  const [ privateStatus, setPrivate ] = React.useState('');

  const radio_props = [
    {label: '', value: 0 },
  ];
  
    return (
      <>
        <SafeAreaView>
          <PlainHeader arrowBack title="New Group" />
        </SafeAreaView>
        <ScrollView>
        <View style={{ margin: SIZES.margin / 1.2 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ ...styles.upload }}>
              <Image source={icons.camera} style={{ width: '50%', height: '50%' }} />
            </View>
            <TextInput  
              style={styles.input}
              placeholder="Group name"
            />
            <View style={{ 
              ...styles.upload, 
              height: SIZES.padding * 2.5, 
              width: SIZES.padding * 2.5,
              borderRadius: SIZES.padding * 2.5, 
              backgroundColor: 'transparent',
            }}>
              <Image source={icons.smiley} style={{ width: '50%', height: '50%' }} />
            </View>
          </View>

          <View style={{ height: 1, backgroundColor: COLORS.border, marginTop: SIZES.margin }}></View>

          <View style={{ ...styles.block }}>

            <Text style={{ ...FONTS.body4, fontWeight: '500', marginVertical: SIZES.margin / 2 }}>Group Privacy</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.5 }}>
                <RadioForm
                  radio_props={radio_props}
                  initial={1}
                  onPress={()=>this.value}
                  buttonSize={9}
                  buttonOuterSize={20}
                  selectedButtonColor={ COLORS.primary }
                  selectedLabelColor={ COLORS.primary }
                  onPress={(value) => setPublic(value) }
                />

                <Text style={{ ...FONTS.body4, fontWeight: '400', marginVertical: SIZES.margin / 2 }}>Public</Text>

                <Image source={icons.public__} style={{ width: '20%', height: '30%' }} resizeMode="contain" />

              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.5 }}>
                <RadioForm
                  radio_props={[ {label: '', value: 0 } ]}
                  onPress={()=>this.value}
                  buttonSize={9}
                  buttonOuterSize={20}
                  selectedButtonColor={ COLORS.primary }
                  selectedLabelColor={ COLORS.primary }
                  onPress={(value) => setPublic(value) }
                />
                <Text style={{ ...FONTS.body4, fontWeight: '400', marginVertical: SIZES.margin / 2 }}>Private</Text>

                <Image source={icons.private__} style={{ width: '20%', height: '30%' }} resizeMode="contain" />

              </View>
            </View>
            
          </View>

          <View style={{ ...styles.block }}>

            <Text style={{ ...FONTS.body4, fontWeight: '500', marginVertical: SIZES.margin / 2 }}>Group Joining Fee</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.5 }}>
                <RadioForm
                  radio_props={radio_props}
                  initial={1}
                  onPress={()=>this.value}
                  buttonSize={9}
                  buttonOuterSize={20}
                  selectedButtonColor={ COLORS.primary }
                  selectedLabelColor={ COLORS.primary }
                  onPress={(value) => setPublic(value) }
                />

                <Text style={{ ...FONTS.body4, fontWeight: '400', marginVertical: SIZES.margin / 2 }}>Free</Text>
                <Image source={icons.free} style={{ width: '20%', height: '30%' }} resizeMode="contain" />

              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.5 }}>
                <RadioForm
                  radio_props={[ {label: '', value: 0 } ]}
                  onPress={()=>this.value}
                  buttonSize={9}
                  buttonOuterSize={20}
                  selectedButtonColor={ COLORS.primary }
                  selectedLabelColor={ COLORS.primary }
                  onPress={(value) => setPublic(value) }
                />
                <Text style={{ ...FONTS.body4, fontWeight: '400', marginVertical: SIZES.margin / 2 }}>Paid</Text>
                <Image source={icons.paid} style={{ width: '20%', height: '30%' }} resizeMode="contain" />

              </View>
            </View>
            
          </View>

          <View style={{ ...styles.block }}>

            <Text style={{ ...FONTS.body4, fontWeight: '500', marginVertical: SIZES.margin / 2 }}>Amount</Text>
            
          </View>

          <TouchableOpacity 
          onPress={() => props.navigation.navigate('Group', { screen: 'GroupDetails' })}
          style={{ ...styles.button, marginTop: SIZES.height / 5 }}>
            <Text style={{ ...FONTS.body4, color: COLORS.white, fontWeight: '500' }}>Create Group </Text>
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
    height: SIZES.padding * 2.5, 
    width: SIZES.padding * 2.5,
    borderRadius: SIZES.padding * 2.5, 
    backgroundColor: COLORS.lightPrimary,
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 0.2
  },
  input: {
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    paddingHorizontal: SIZES.padding,
    flex: 0.8,
    ...FONTS.body4,
    color: COLORS.black,
  },
  block: {
    height: 100,
    // backgroundColor: 'red',
    borderBottomColor: COLORS.border,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 1,
    marginVertical: SIZES.margin / 2
  },
  button: {
    backgroundColor: COLORS.primary, 
    height: SIZES.margin * 2.4, 
    marginHorizontal: SIZES.margin / 2.8,
    borderRadius: SIZES.radius / 2, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CreateGroup;
