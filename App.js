import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Student from './components/student';
import AddStudent from './components/AddStudent';

export default function App() {
  const [data, setData] = useState({})
  const [isVisible, setIsVisible] = useState(false)
  const [students, setStudents] = useState([
    {name:"delano", matricule:"12K8932", email:"delano@gmail.com"},
    {name:"delano", matricule:"20K0932", email:"delano@gmail.com"},
    {name:"delano", matricule:"03K8932", email:"delano@gmail.com"}
  ]);

  const addStudent = (name, email, matricule, index=0, isEdit=false) => {

    if(name && email && matricule){
      if(isEdit){
        students[index] = {matricule, name, email}
        setStudents(students)
      }else{
        setStudents([{name, email, matricule}, ...students]);
        console.log(students);
      }
      setIsVisible(false);
    }
  }

  const deleteStudent = (student) => {
    setStudents(students.filter((stud)=>{return stud.matricule != student.matricule}))
  }

  const editStudent = (student) => {
    // console.log(student);
    setData(student);
    setIsVisible(true);
  } 


  return (
    <View style={styles.container}>
      <AddStudent 
        isVisible={isVisible} 
        addStudent={addStudent}
        student={data}
      />
      {students.map((student, index)=>{
        return (
          <Student 
            student={student} 
            key={index}
            deleteStudent={deleteStudent}
            editStudent={editStudent}  
          />
       ) 
      })}        
      <View style={styles.fabsIcon}>
          <Ionicons name="add" size="50r" color="white"/>
      </View>

      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  fabsIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    bottom: 75,
    right: 25,
    backgroundColor: "cyan",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});
