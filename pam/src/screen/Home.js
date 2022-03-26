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
import {PELABUHAN, LAYANAN, TIKET, PEMBATALAN} from '../utils/Data';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import Moment from 'moment';

const Home = ({navigation}) => {
  const [awal, setAwal] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [layanan, setLayanan] = useState('');
  const [tgl, setTgl] = useState('Tanggal Masuk');
  const [jam, setJam] = useState('Jam Masuk');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [timeOpen, setTimeOpen] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setTgl(Moment(date).format('dddd, DD MM YYYY').toString());
    // console.warn('A date has been picked: ', date, tgl);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = time => {
    setJam(Moment(time).format('HH:mm').toString());
    // console.warn('A date has been picked: ', time, jam);
    hideTimePicker();
  };

  const onSubmit = () => {
    // console.warn(awal, tujuan, layanan, tgl, jam);
    navigation.navigate('Confirm', {
      awal: awal,
      tujuan: tujuan,
      layanan: layanan,
      tgl: tgl,
      jam: jam,
    });
    this;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.subTitle}>Pelabuhan Awal</Text>
            <View style={styles.fieldContainer}>
              <FontAwesome name="ship" size={35} color="#11468F" />
              <Picker
                selectedValue={awal}
                onValueChange={setAwal}
                style={styles.dropdown}>
                <Picker.Item label="Pelabuhan Awal" value="kosong" />
                {PELABUHAN.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.pelabuhan_nama}
                      value={item.pelabuhan_id}
                      key={item.pelabuhan_id}
                    />
                  );
                })}
              </Picker>
            </View>
            <Text style={styles.subTitle}>Pelabuhan Tujuan</Text>
            <View style={styles.fieldContainer}>
              <FontAwesome name="ship" size={35} color="#11468F" />
              <Picker
                selectedValue={tujuan}
                onValueChange={setTujuan}
                style={styles.dropdown}>
                <Picker.Item label="Pelabuhan Tujuan" value="kosong" />
                {PELABUHAN.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.pelabuhan_nama}
                      value={item.pelabuhan_id}
                      key={item.pelabuhan_id}
                    />
                  );
                })}
              </Picker>
            </View>
            <Text style={styles.subTitle}>Kelas Layanan</Text>
            <View style={styles.fieldContainer}>
              <FontAwesome name="bookmark" size={35} color="#11468F" />
              <Picker
                selectedValue={layanan}
                style={styles.dropdown}
                onValueChange={setLayanan}>
                <Picker.Item label="Layanan" value="kosong" />
                {LAYANAN.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.layanan_nama}
                      value={item.layanan_id}
                      key={item.layanan_id}
                    />
                  );
                })}
              </Picker>
            </View>
            <Text style={styles.subTitle}>Tanggal Masuk Pelabuhan</Text>
            <View style={styles.fieldContainer}>
              <FontAwesome name="calendar" size={35} color="#11468F" />
              <TouchableOpacity style={styles.btnTgl} onPress={showDatePicker}>
                <Text style={styles.textBtnTgl}>{tgl}</Text>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                onChange={setTgl}
              />
            </View>
            <Text style={styles.subTitle}>Jam Masuk Pelabuhan</Text>
            <View style={styles.fieldContainer}>
              <FontAwesome name="clock" size={35} color="#11468F" />
              <TouchableOpacity style={styles.btnTgl} onPress={showTimePicker}>
                <Text style={styles.textBtnTgl}>{jam}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
                onChange={setJam}
              />
            </View>
            <View style={styles.fieldContainer}>
              <View style={styles.dewasa}>
                <Text style={styles.dChild}>Dewasa</Text>
                <Text style={styles.dChild}>1</Text>
              </View>
            </View>
            <View style={styles.fieldContainer}>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.textButton}>Buat Ticket</Text>
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
    backgroundColor: '#88b454',
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
});

export default Home;
