/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Keyboard, View, Text, StyleSheet, Dimensions} from 'react-native';
import Background from '../../components/background';
import AppTextInput from '../../components/appTextInput';
import AppDualTextInput from '../../components/appDualTextInput';
import AppButton from '../../components/appButton';
import RegisterAccount from '../../controllers/RegistrationController';

const {height} = Dimensions.get('window');

const RegistrationPage = ({navigation}: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegisterPress = async () => {
    Keyboard.dismiss();
    setErrorMsg('');

    if (
      validateEntires(firstName, lastName, email, password, confirmPassword)
    ) {
      if (await RegisterAccount(firstName, lastName, email, password)) {
        navigation.navigate('DestinationSelect');
      } else {
        setErrorMsg('REGISTRATION FAILED \n Email already exists');
      }
    } else {
      console.log('INVALID ENTRIES');
      console.log(firstName, lastName, email, password, confirmPassword);
    }
  };

  const handleCancelPress = () => {
    navigation.navigate('Login');
  };

  const handleFirstNameChange = (newFirstName: string) => {
    setFirstName(newFirstName);
  };

  const handleLastNameChange = (newLastName: string) => {
    setLastName(newLastName);
  };

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
  };

  const validateFirstName = (newFirstName: string): boolean => {
    if (newFirstName.length < 1) {
      setErrorMsg('Enter First Name');
      return false;
    }
    return true;
  };

  const validateLastName = (newLastName: string): boolean => {
    if (newLastName.length < 1) {
      setErrorMsg('Enter Last Name');
      return false;
    }
    return true;
  };

  const validateEmail = (newEmail: string): boolean => {
    if (newEmail.match(/\S+@\S+\.\S+/) == null) {
      setErrorMsg('Enter Valid Email Address');
      return false;
    }
    return true;
  };

  const validatePassword = (newPassword: string): boolean => {
    if (newPassword.length < 8) {
      setErrorMsg('Password must be a length of 8');
      return false;
    }
    return true;
  };

  const validateConfirmPassword = (
    checkPassword: string,
    checkConfirmPassword: string,
  ): boolean => {
    if (checkPassword === checkConfirmPassword) {
      return true;
    }
    setErrorMsg('Passwords do not match');
    return false;
  };

  const validateEntires = (
    checkFirstName: string,
    checkLastName: string,
    checkEmail: string,
    checkPassword: string,
    checkConfirmPassword: string,
  ): boolean => {
    return (
      validateFirstName(checkFirstName) &&
      validateLastName(checkLastName) &&
      validateEmail(checkEmail) &&
      validatePassword(checkPassword) &&
      validateConfirmPassword(checkPassword, checkConfirmPassword)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Create an Account</Text>
      <Background
        source={require('../../assets/LoginPageBg.jpeg')}
        color="white"
        style={{
          zIndex: -1,
        }}
      />
      <View style={styles.InputFields}>
        <AppDualTextInput
          header="Name"
          leftPlaceholder="First Name"
          rightPlaceholder="Last Name"
          leftSecureTextEntry={false}
          rightSecureTextEntry={false}
          onChangeLeftText={handleFirstNameChange}
          onChangeRightText={handleLastNameChange}
        />
        <AppTextInput
          header="Email"
          placeholder="Enter email"
          onChangeText={handleEmailChange}
        />
        <AppTextInput
          header="Password"
          placeholder="Enter Password"
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <AppTextInput
          header="Confirm Password"
          placeholder="Enter Password"
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry={true}
        />
        <AppButton
          text="Register"
          width={280}
          height={40}
          marginTop={20}
          onPress={handleRegisterPress}
        />
        <Text style={styles.errorMessageText}>{errorMsg}</Text>
        <AppButton
          text="Cancel"
          width={280}
          height={40}
          marginTop={20}
          onPress={handleCancelPress}
        />
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
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
    textAlign: 'center',
  },
});

export default RegistrationPage;
