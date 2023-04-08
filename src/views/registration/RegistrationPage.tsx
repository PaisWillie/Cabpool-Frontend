import React, { useState } from 'react';
import { Keyboard, View, Text, StyleSheet, Dimensions } from 'react-native';
import Background from '../../components/background';
import AppTextInput from '../../components/appTextInput';
import AppDualTextInput from '../../components/appDualTextInput';
import AppButton from '../../components/appButton';

const { width, height } = Dimensions.get('window');

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const HandleRegisterPress = (): void => {
    Keyboard.dismiss();

    if (
      validateEntires(firstName, lastName, email, password, confirmPassword)
    ) {
      console.log('SUCCESSFULL REGISTER');
    } else {
      console.log('INVALID ENTRIES');
      console.log(firstName, lastName, email, password, confirmPassword);
    }
  };

  const handleFirstNameChange = (firstName: string) => {
    setFirstName(firstName);
  };

  const handleLastNameChange = (lastName: string) => {
    setLastName(lastName);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
  };

  const validateFirstName = (firstName: string): boolean => {
    if (firstName.length < 1) {
      setErrorMsg('Enter First Name');
      return false;
    }
    return true;
  };

  const validateLastName = (lastName: string): boolean => {
    if (lastName.length < 1) {
      setErrorMsg('Enter Last Name');
      return false;
    }
    return true;
  };

  const validateEmail = (email: string): boolean => {
    if (email.match(/\S+@\S+\.\S+/) == null) {
      setErrorMsg('Enter Valid Email Address');
      return false;
    }
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (password.length < 8) {
      setErrorMsg('Password must be a length of 8');
      return false;
    }
    return true;
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string,
  ): boolean => {
    if (password === confirmPassword) {
      return true;
    }
    setErrorMsg('Passwords do not match');
    return false;
  };

  const validateEntires = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
  ): boolean => {
    return (
      validateFirstName(firstName) &&
      validateLastName(lastName) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(password, confirmPassword)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Create an Account</Text>
      <Background
        source={require('../../assets/LoginPageBg.jpeg')}
        color='white'
        style={{
          zIndex: -1,
        }}
      />
      <View style={styles.InputFields}>
        <AppDualTextInput
          header='Name'
          leftPlaceholder='First Name'
          rightPlaceholder='Last Name'
          leftSecureTextEntry={false}
          rightSecureTextEntry={false}
          onChangeLeftText={handleFirstNameChange}
          onChangeRightText={handleLastNameChange}
        />
        <AppTextInput
          header='Email'
          placeholder='Enter email'
          onChangeText={handleEmailChange}
        />
        <AppTextInput
          header='Password'
          placeholder='Enter Password'
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <AppTextInput
          header='Confirm Password'
          placeholder='Enter Password'
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry={true}
        />
        <AppButton
          text='Register'
          width={280}
          height={40}
          marginTop={20}
          onPress={HandleRegisterPress}
        />
        <Text style={styles.errorMessageText}>{errorMsg}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderText: {
    top: height * 0.08,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  InputFields: {
    top: height * 0.15,
  },
  errorMessageText: {
    color: 'black',
    fontSize: 15,
    textShadowColor: 'white',
    fontWeight: 'bold',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
});

export default RegistrationPage;
