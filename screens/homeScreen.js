import React, { Component } from 'react';
import { View, Text, TouchableOpacity,     StyleSheet, Alert} from 'react-native';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
 <Text style={styles.titleText}>Always On Time!!</Text>

     <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Milestones")
                    }>
                    <Text style={styles.routeText}>
                    Milestones
                    </Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Incomplete")
                    }>
                    <Text style={styles.routeText}>
                    Incomplete Tasks
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("CreateTimetable")
                    }>
                    <Text style={styles.routeText}>
                    Create Timetable
                    </Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Complete")
                    }>
                    <Text style={styles.routeText}>
                    Complete
                    </Text>
                        </TouchableOpacity>
                    
      </View>
    );
  }
}
const styles = StyleSheet.create({

routeCard: {
        flex: 0.25,
        marginLeft: 70,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        width:200,
height:50,
justifyContent:"center",
        backgroundColor: 'white',
        alignItems:"center"
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        
    },
    container: {
        flex: 1,
         justifyContent:"center",
        alignItems:"center",
        alignText:"center"
        
    },
     routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",

       
    },
    });
