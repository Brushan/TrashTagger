import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'

function Login() {
const [user, setUser] = useState({
    username: '',
    password: ''
})
const onLogin = () => {
    console.log(user)
}
    return (
        <View style={styles.container}>
            <TextInput
            value={user.username}
            onChangeText={(username)=> setUser({username})}
            placeholder={'Username'}
            style={styles.input} />
            <TextInput
            value={user.password}
            onChangeText={(password) => setUser({...user}, {password})}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            />

            <Button
                title={'Login'}
                style={styles.input}
                onPress={onLogin}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });
export default Login