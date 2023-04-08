import React from 'react';
import { View, TouchableOpacity, Text, TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

interface AppButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  height?: number;
  width?: number;
  borderRadius?: number;
  marginTop?: number;
}

const AppButton: React.FC<AppButtonProps> = ({ marginTop = 3, text, onPress, style, textStyle, width, height, borderRadius = 15, ...rest }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: marginTop }}>
      <TouchableOpacity style={[{ margin: 3, backgroundColor: 'black', width: width, height: height, borderRadius: borderRadius, justifyContent: 'center' }, style]} onPress={onPress} {...rest}>
        <Text style={[{ color: '#fff', textAlign: 'center', fontSize: 16 }, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
