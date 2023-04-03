import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Dimensions } from 'react-native';

const LoginPage = () => {
  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    /*const isValid = await ValidateLogin(email, password);
    if (isValid) {
      return true;
    } else {
      setPassword('');
      return false;
    }*/
    setPassword('');
    return false;
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/LoginPageBg.jpeg')} style={[styles.backgroundImage, {width, height: height + 50}]}/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          autoComplete="email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          autoComplete="password"
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={Login} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: require('../../assets/LoginPageBg.jpeg'),
    resizeMode: 'cover',
    opacity: 0.7,
  },
  header: {
    position: 'absolute',
    top: 300,
    alignItems: 'center',
    zIndex: 1,
  },
  headerText: {
    fontSize: 30,
    color: 'black',
  },
  inputContainer: {
    position: 'absolute',
    top: 350,
    width: '80%',
    alignItems: 'center',
    zIndex: 1,
  },  
  textInput: {
    width: 280,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 100,
    marginTop: 10,
  }  ,
});

export default LoginPage;
