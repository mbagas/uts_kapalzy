import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
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

// const Item = ({awal, tujuan, layanan, tgl, jam, detail}) => (
//   <TouchableOpacity style={styles.ticket} onPress={detail}>
//     <View style={styles.ticketHead}>
//       <Text style={styles.harbourText}>{awal.pelabuhan_nama}</Text>
//       <FontAwesome name="arrow-right" size={40} color="black" />
//       <Text style={styles.harbourText}>{tujuan.pelabuhan_nama}</Text>
//     </View>
//     <View style={styles.ticketContent}>
//       <Text style={styles.ticketTextHead}>Jadwal Masuk Pelabuhan</Text>
//       <Text style={styles.ticketText}>{tgl}</Text>
//       <Text style={styles.ticketText}>
//         {jam} WIB {'\n'}
//       </Text>
//       <Text style={styles.ticketTextHead}>Layanan</Text>
//       <Text style={styles.ticketText}>{layanan.layanan_nama}</Text>
//     </View>
//     <View style={styles.ticketFoot}>
//       <Text style={styles.ticketText}>Dewasa x 1</Text>
//       <Text style={styles.ticketText}>{layanan.layanan_harga}</Text>
//     </View>
//   </TouchableOpacity>
// );

const Cancellation = ({navigation}) => {
  const detail = id => {
    console.log(id, 'asd');
    navigation.navigate('TicketDetail', {
      id: id,
    });
  };
  const Item = ({id, awal, tujuan, layanan, tgl, jam}) => (
    <TouchableOpacity style={styles.ticket} onPress={() => detail(id)}>
      <View style={styles.ticketHead}>
        <Text style={styles.harbourText}>{awal.pelabuhan_nama}</Text>
        <FontAwesome name="arrow-right" size={40} color="black" />
        <Text style={styles.harbourText}>{tujuan.pelabuhan_nama}</Text>
      </View>
      <View style={styles.ticketContent}>
        <Text style={styles.ticketTextHead}>Jadwal Masuk Pelabuhan</Text>
        <Text style={styles.ticketText}>{tgl}</Text>
        <Text style={styles.ticketText}>
          {jam} WIB {'\n'}
        </Text>
        <Text style={styles.ticketTextHead}>Layanan</Text>
        <Text style={styles.ticketText}>{layanan.layanan_nama}</Text>
      </View>
      <View style={styles.ticketFoot}>
        <Text style={styles.ticketText}>Dewasa x 1</Text>
        <Text style={styles.ticketText}>{layanan.layanan_harga}</Text>
      </View>
    </TouchableOpacity>
  );

  const namaPelabuhan = id => {
    let hasil = PELABUHAN.find(hasil => hasil.pelabuhan_id === id);
    return hasil;
  };

  const namaLayanan = id => {
    let hasil = LAYANAN.find(hasil => hasil.layanan_id === id);
    return hasil;
  };

  const renderItem = ({item}) => {
    return (
      <Item
        id={item.tiket_id}
        awal={namaPelabuhan(item.pelabuhan_awal_id)}
        tujuan={namaPelabuhan(item.pelabuhan_tujuan_id)}
        layanan={namaLayanan(item.layanan_id)}
        tgl={item.tgl_masuk}
        jam={item.jam_masuk}
      />
    );
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [isFetching, setIsFetching] = React.useState(false);
  const onRefresh = async () => {
    setIsFetching(true);
    await sleep(1000);
    setIsFetching(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.ticketContainer}>
            <Text
              style={{
                color: 'black',
                paddingVertical: 10,
                fontSize: 30,
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Ticket Cancellation
            </Text>
            <FlatList
              data={TIKET.filter(x => {
                return x.status == 'batal';
              })}
              renderItem={renderItem}
              keyExtractor={item => item.tiket_id}
              onRefresh={onRefresh}
              refreshing={isFetching}
              extraData={TIKET}
            />
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
    backgroundColor: '#88b454',
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
    marginHorizontal: 35,
    fontSize: 20,
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

export default Cancellation;
