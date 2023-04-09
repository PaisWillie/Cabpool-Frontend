/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Keyboard, View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from '@rneui/base';
import AppTextInput from '../../components/appTextInput';
import AppButton from '../../components/appButton';
import Background from '../../components/background';
import CheckLogin from '../../controllers/LoginController';

const LoginPage = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegisterPress = () => {
    navigation.navigate('Registration');
  };

  const handleLoginPress = async () => {
    Keyboard.dismiss();

    if (validateEnties(email, password)) {
      if (await CheckLogin(email, password)) {
        login();
      } else {
        setErrorMsg('Invalid Email or Password');
      }
    }
  };

  const login = () => {
    navigation.navigate('DestinationSelect');
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    setErrorMsg('');
  };

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    setErrorMsg('');
  };

  const validateEnties = (checkEmail: string, checkPassword: string) => {
    if (checkEmail.match(/\S+@\S+\.\S+/) == null) {
      setErrorMsg('Enter a valid email adress');
    } else if (checkPassword.length === 0) {
      setErrorMsg('Enter a valid password');
    } else {
      return true;
    }

    return false;
  };

  return (
    <View style={styles.container}>
      <Background
        source={require('../../assets/LoginPageBg.jpeg')}
        color="white"
        style={{
          zIndex: -1,
        }}
      />
      <View style={styles.header}>
        <Text style={styles.headerText} />
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          leftIcon=""
          rightIcon=""
          placeholder="Email"
          onChangeText={handleEmailChange}
        />
        <AppTextInput
          leftIcon=""
          rightIcon=""
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={handlePasswordChange}
        />
        <Text style={styles.errorMessageText}>{errorMsg}</Text>
        <View style={styles.loginButtonContainer}>
          <AppButton
            text="Login"
            onPress={handleLoginPress}
            borderRadius={15}
            width={280}
            height={40}
          />
          <AppButton
            text="Register"
            onPress={handleRegisterPress}
            borderRadius={15}
            width={280}
            height={40}
          />
        </View>
      </View>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
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
    resizeMode: 'cover',
    opacity: 0.7,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 50,
  },
  header: {
    position: 'absolute',
    top: 270,
    alignItems: 'center',
    zIndex: 1,
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  inputContainer: {
    position: 'absolute',
    top: 320,
    width: '80%',
    alignItems: 'center',
    zIndex: 1,
  },
  textInput: {
    width: 280,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    marginBottom: 10,
  },
  loginButtonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 280,
    marginTop: 10,
  },
  registerButtonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 280,
    marginTop: 10,
  },
  errorMessageText: {
    color: 'black',
    fontSize: 15,
    textShadowColor: 'white',
    fontWeight: 'bold',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  logo: {
    top: -20,
    transform: [{scale: 0.5}],
    position: 'absolute',
    tintColor: 'black',
  },
});

export default LoginPage;
