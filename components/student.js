import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';

export default function Student({student, deleteStudent, editStudent}) {
    return (
        <View style={styles.item}>
            <View style={styles.info}>
            <Text>{student.name}</Text>
            <Text>{student.matricule}</Text>
            <Text>{student.email}</Text>
            </View>
            <TouchableHighlight 
                onPress={()=>{editStudent(student)}}
            style={styles.edit} >
                <Ionicons name="pencil" color="white"/>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={()=>{deleteStudent(student)}}
            style={styles.delete}>
                <Ionicons name="trash"  color="white"/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
        margin: 5,
        flexDirection: "row"
    },
    info: {
        margin: 5,
        flexDirection: "row"
    },
    delete: {
        backgroundColor: "red",
        padding: "5px",
        alignItems: "center",
        justifyContent: "center",
    },
    edit: {
        backgroundColor: "cyan",
        padding: "5px",
        alignItems: "center",
        justifyContent: "center",
    }

  });
  