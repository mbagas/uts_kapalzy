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
  const {id, awal, tujuan, layanan, tgl, jam} = route.params;

  const onSubmit = () => {
    ticket.status = 'batal';
    navigation.navigate('Tickets');
    // console.log(ticket.status);
    // console.log(TIKET);
  };

  let ticket = TIKET.find(ticket => ticket.tiket_id === id);
  console.log(ticket);

  let namaAwal = PELABUHAN.find(
    namaAwal => namaAwal.pelabuhan_id === ticket.pelabuhan_awal_id,
  );
  let namaTujuan = PELABUHAN.find(
    namaTujuan => namaTujuan.pelabuhan_id === ticket.pelabuhan_tujuan_id,
  );
  let namaLayanan = LAYANAN.find(
    namaLayanan => namaLayanan.layanan_id === ticket.layanan_id,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.ticketContainer}>
            <Text
              style={{color: 'black', paddingVertical: 10, fontWeight: 'bold'}}>
              Detail Ticket
            </Text>
            <View style={styles.ticket}>
              <View style={styles.ticketHead}>
                <Text style={styles.harbourText}>
                  {namaAwal.pelabuhan_nama}
                </Text>
                <FontAwesome name="arrow-right" size={40} color="black" />
                <Text style={styles.harbourText}>
                  {namaTujuan.pelabuhan_nama}
                </Text>
              </View>
              <View style={styles.ticketContent}>
                <Text style={styles.ticketTextHead}>
                  Jadwal Masuk Pelabuhan
                </Text>
                <Text style={styles.ticketText}>{ticket.tgl_masuk}</Text>
                <Text style={styles.ticketText}>
                  {ticket.jam_masuk} WIB {'\n'}
                </Text>
                <Text style={styles.ticketTextHead}>Layanan</Text>
                <Text style={styles.ticketText}>
                  {namaLayanan.layanan_nama}
                </Text>
              </View>
              <View style={styles.ticketFoot}>
                <Text style={styles.ticketText}>Dewasa x 1</Text>
                <Text style={styles.ticketText}>
                  {namaLayanan.layanan_harga}
                </Text>
              </View>
            </View>
            <View style={styles.fieldContainer}>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.textButton}>Batalkan Tiket</Text>
              </TouchableOpacity>
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
  ticketContainer: {
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
    justifyContent: 'space-between',
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
    backgroundColor: '#FF1818',
    color: '#FF1818',
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
  ticket: {
    backgroundColor: '#EEEE',
    padding: 10,
    borderWidth: 1,
    borderColor: '#35353',
    marginVertical: 10,
  },
  ticketHead: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  harbourText: {
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 15,
    fontSize: 17,
  },
  ticketContent: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  ticketFoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  ticketText: {
    color: 'black',
  },
  ticketTextHead: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Confirm;
