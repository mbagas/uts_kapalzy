import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {PELABUHAN, LAYANAN, TIKET, PEMBATALAN} from '../utils/Data';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import Moment from 'moment';
// import RNPickerSelect from 'react-native-picker-select';

const Confirm = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <Text
                style={{
                  color: 'black',
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 30,
                  textAlign: 'center',
                }}>
                KAPALZY
              </Text>
            </View>
            <View style={styles.fieldContainer}>
              <Text
                style={{
                  color: 'black',
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Nama : Muksin Bagaskara
              </Text>
            </View>
            <View style={styles.fieldContainer}>
              <Text
                style={{
                  color: 'black',
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                NIM : 119140167
              </Text>
            </View>
            <View style={styles.fieldContainer}>
              <Text
                style={{
                  color: 'black',
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Kelas : RC
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  container: {
    backgroundColor: '#C8C6C6',
    height: '100%',
  },
  formContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    paddingTop: 10,
    borderRadius: 15,
    // height: '150%',
  },
  fieldContainer: {
    marginHorizontal: 10,
    marginVertical: 2,
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dewasa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEE',
    color: 'black',
    width: '100%',
    height: 35,
    borderRadius: 15,
  },
  dChild: {
    marginHorizontal: 70,
    color: 'black',
  },
  subTitle: {
    width: '100%',
    flexDirection: 'row',
    color: 'black',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: 'orange',
    color: 'orange',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dropdown: {
    color: 'black',
    borderColor: 'black',
    backgroundColor: '#EEEEEE',
    padding: 10,
    width: '85%',
  },
  btnTgl: {
    color: 'black',
    borderColor: 'black',
    backgroundColor: '#EEEEEE',
    padding: 10,
    width: '85%',
  },
  textBtnTgl: {
    color: 'black',
  },
});

export default Confirm;
