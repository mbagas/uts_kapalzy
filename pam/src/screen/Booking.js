import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {PELABUHAN, LAYANAN, TIKET, PEMBATALAN} from '../utils/Data';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import Moment from 'moment';
// import RNPickerSelect from 'react-native-picker-select';

const Confirm = ({navigation, route}) => {
  const [nama, setNama] = useState();
  const [jk, setJk] = useState();
  const [umur, setUmur] = useState();
  const {awal, tujuan, layanan, tgl, jam} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  if (
    !awal ||
    !tujuan ||
    !layanan ||
    tgl == 'Tanggal Masuk' ||
    jam == 'Tanggal Masuk'
  ) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView style={styles.screenContainer}>
          <View style={styles.container}>
            <View style={styles.ticketContainer}>
              <Text
                style={{
                  color: 'black',
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Terjadi Suatu Kesalahan
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  const onSubmit = () => {
    let NEWTIKET = {
      tiket_id: TIKET.length + 1,
      pelabuhan_awal_id: awal,
      pelabuhan_tujuan_id: tujuan,
      layanan_id: layanan,
      tgl_masuk: tgl,
      jam_masuk: jam,
      nama_lengkap: nama,
      identitas: jk,
      umur: umur,
      status: 'aktif',
    };
    TIKET.push(NEWTIKET);
    console.log(TIKET);
    console.log(TIKET[0]);
    //

    setModalVisible(!modalVisible);
  };

  const exit = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Home');
  };
  let namaAwal = PELABUHAN.find(namaAwal => namaAwal.pelabuhan_id === awal);
  let namaTujuan = PELABUHAN.find(
    namaTujuan => namaTujuan.pelabuhan_id === tujuan,
  );
  let namaLayanan = LAYANAN.find(
    namaLayanan => namaLayanan.layanan_id === layanan,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <KeyboardAvoidingView style={styles.screenContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textBtnTgl}>
                  Silahkan Bayar ke Rek 119140167
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={exit}>
                  <Text style={styles.textStyle}>Kembali</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View style={styles.container}>
            <View style={styles.ticketContainer}>
              <Text
                style={{
                  color: 'black',
                  paddingVertical: 10,
                  fontWeight: 'bold',
                }}>
                Informasi Pemesanan
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
                  <Text style={styles.ticketText}>{tgl}</Text>
                  <Text style={styles.ticketText}>
                    {jam} WIB {'\n'}
                  </Text>
                  <Text style={styles.ticketTextHead}>Layanan</Text>
                  <Text style={styles.ticketText}>
                    {namaLayanan.layanan_nama}
                  </Text>
                </View>
                <View style={styles.ticketFoot}>
                  <Text style={styles.ticketText}>Dewasa x 1</Text>
                  <Text style={styles.ticketText}>Rp 65.000,00</Text>
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  fontSize: 20,
                  paddingHorizontal: 10,
                }}>
                Data Pemesan
              </Text>
              <View style={styles.fieldContainer}>
                <Input
                  type="text"
                  style={{color: 'black'}}
                  value={nama}
                  // onChange={setIdentitas.nama}
                  onChangeText={setNama}
                  placeholder="Nama Lengkap"
                  label="Nama Lengkap"
                  autoCompleteType="off"
                />
              </View>

              <View style={styles.fieldContainer}>
                <Input
                  type="text"
                  style={{color: 'black'}}
                  value={jk}
                  // onChange={setIdentitas.nama}
                  onChangeText={setJk}
                  placeholder="Laki-laki"
                  label="Identitas"
                  autoCompleteType="off"
                />
              </View>
              <View style={styles.fieldContainer}>
                <Input
                  type="text"
                  style={{color: 'black'}}
                  value={umur}
                  // onChange={setIdentitas.nama}
                  onChangeText={setUmur}
                  placeholder="Umur"
                  label="Umur"
                  autoCompleteType="off"
                />
              </View>
              <View style={styles.fieldContainer}>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                  <Text style={styles.textButton}>Buat Ticket</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'space-between',
    flex: 1,
    height: '100%',
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
  modalView: {
    margin: 20,
    marginVertical: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Confirm;
