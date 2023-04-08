import React from 'react';
import { Text, StyleSheet, TextInput, View, ViewStyle, KeyboardTypeAndroid } from 'react-native';
import { Icon } from '@rneui/themed';

interface AppDualTextInputProps {
  header?: string;
  leftPlaceholder?: string;
  rightPlaceholder?: string;
  leftLeftIcon?: string;
  leftRightIcon?: string;
  rightLeftIcon?: string;
  rightRightIcon?: string;
  textStyle?: ViewStyle;
  leftSecureTextEntry?: boolean;
  rightSecureTextEntry?: boolean;
  keyboardType?: KeyboardTypeAndroid;
  onChangeLeftText?: (text: string) => void;
  onChangeRightText?: (text: string) => void;
}

const AppDualTextInput: React.FC<AppDualTextInputProps> = ({
  header,
  leftPlaceholder,
  rightPlaceholder,
  leftLeftIcon,
  leftRightIcon,
  rightLeftIcon,
  rightRightIcon,
  onChangeLeftText,
  onChangeRightText,
  leftSecureTextEntry,
  rightSecureTextEntry,
}) => {
  return (
    <View style={styles.PageStyle}>
      {header && <Text style={styles.TitleStyle}>{header}</Text>}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {leftLeftIcon && <Icon name={leftLeftIcon} type="feather" style={styles.leftIcon} />}
          <TextInput
            style={styles.TextInput}
            placeholder={leftPlaceholder}
            placeholderTextColor="rgba(0,0,0,0.6)"
            onChangeText={onChangeLeftText}
            secureTextEntry={leftSecureTextEntry}
          />
          {leftRightIcon && <Icon name={leftRightIcon} type="feather" style={styles.rightIcon} />}
        </View>
        <View style={styles.inputContainer}>
          {rightLeftIcon && <Icon name={rightLeftIcon} type="feather" style={styles.leftIcon} />}
          <TextInput
            style={styles.TextInput}
            placeholder={rightPlaceholder}
            placeholderTextColor="rgba(0,0,0,0.6)"
            onChangeText={onChangeRightText}
            secureTextEntry={rightSecureTextEntry}
          />
          {rightRightIcon && <Icon name={rightRightIcon} type="feather" style={styles.rightIcon} />}
        </View>
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
    justifyContent: 'space-between',
    width: 280,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 40,
    elevation: 5,
    shadowColor: 'black',
    flex: 1,
    marginHorizontal: 5,
  },
  TextInput: {
    flex: 1,
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
    
export default AppDualTextInput;
