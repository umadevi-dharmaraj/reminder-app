import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {TimePicker} from 'react-native-simple-time-picker';
import db from "../config"


export default class CreateTimetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      subject:"",
      startTime:"",
      endTime:"",
      startDate:null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: "",
      });
    }
  }

setTimetable = async (StartDate) => {
   console.log(StartDate);
   console.log(this.state.startTime)
   console.log(this.state.subject)
   console.log(this.state.endTime)
    const Timetable = await db.collection("reminder").get();
    console.log(Timetable)
    //.add({
     // subject:this.state.subject,
      // startTime:this.state.startTime,
      // endTime:this.state.endTime,
      // date:StartDate
  //  });
}
  render() {
    const { selectedStartDate,subject,startTime,endTime } = this.state;
    // const minDate = new Date(); // Today
    // const maxDate = new Date(2017, 6, 3);
    
   const  startDate  =  selectedStartDate ? selectedStartDate.toString().split(' ').splice(0, 4).join(' ')
 : '';
 const StartDate = startDate.split(' ').splice(0, 4).join(' ');
 console.log(startDate.split(' ').splice(0, 4).join(' '))
 
    // const date = startDate.splice(0, 4).join(' ');
   // .toDate().toString().split(' ').splice(0, 4).join(' ');

    return (
      
      <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <View>
      <TouchableOpacity
      onPress={this.setTimetable(StartDate)}>
      <Text>
      Save Timetable
      </Text>
      </TouchableOpacity>
      </View>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>Day:{ startDate }</Text>
          </View>
        
         <View>
            <TextInput
           
              onChangeText={text => this.setState({ subject: text })}
              placeholder={"Subject"}
              placeholderTextColor={"black"}
              value={subject}
            />
            </View>
           <View>
            <Text>Starting Time: </Text>
            <TimePicker 
            onChange={(time) => {
            this.setState({startTime:time})
          }}
               />
            </View>
             <View>
            <Text>Ending Time: </Text>
            <TimePicker
            onChange={(time) => {
            this.setState({endTime:time})
          }}
               />
            </View>
        </SafeAreaView>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});