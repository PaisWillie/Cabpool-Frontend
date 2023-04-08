import React from 'react';
import { Text, StyleSheet, TextInput, View, ViewStyle, KeyboardTypeAndroid } from 'react-native';
import { FAB, Icon } from '@rneui/themed';

interface AppTextInputProps {
  header?: string;
  placeholder?: string;
  leftIcon?: string;
  rightIcon?: string;
  textStyle?: ViewStyle;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeAndroid;
  onChangeText?: (text: string) => void;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ header, placeholder, leftIcon, rightIcon, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.PageStyle}>
      {header && <Text style={styles.TitleStyle}>{header}</Text>}
      <View style={styles.container}>
        {leftIcon && (
          <View style={styles.leftIcon}>
            <Icon name='menu' type='feather' />
          </View>
        )}
        <TextInput style={styles.TextInput} placeholder={placeholder} placeholderTextColor='rgba(0,0,0,0.6)' onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
        {rightIcon && (
          <View style={[styles.rightIcon, { marginRight: -10 }]}>
            <Icon name='menu' type='feather' />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PageStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleStyle: {
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 40,
    elevation: 5,
    shadowColor: 'black',
    width: 280,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  TextInput: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  leftIcon: {
    width: 36,
    height: 36,
    marginLeft: 0,
  },
  rightIcon: {
    width: 36,
    height: 36,
    position: 'absolute',
    right: 10,
  },
});

export default AppTextInput;
