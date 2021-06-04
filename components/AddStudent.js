import React, {useState, useEffect} from 'react'
import { View,StyleSheet, Text, Modal, TextInput , Button} from 'react-native'

export default function AddStudent({isVisible, addStudent, student, key}) {
    console.log(student);
    const [name, onChangeName] = useState(student.name)
    const [email, onChangeEmail] = useState(student.email)
    const [matricule, onChangeMatricule] = useState(student.matricule)
    
    useEffect(() => {
        onChangeName(student.name)
        onChangeMatricule(student.matricule)
        onChangeEmail(student.email)
        return () => {
        }
    })

    
    return (
        <View style={styles.container}>

            <Modal 
                animationType="slide"
                transparent={true}
                visible={false}
                onRequestClose={close}
            >
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="Entrez votre nom"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMatricule}
                    value={matricule}
                    placeholder="Entrez votre matricule"
                />   
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Entrez l'email"
                />    
                <Button
                    onPress={()=>{ 
                        addStudent(name, email, matricule, key)
                     }}
                    title="Add Student"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "flex-start",
    },
    input: {
        flex: 1,
        width:"100%",
        padding: 5,
        margin: 10
    }
});