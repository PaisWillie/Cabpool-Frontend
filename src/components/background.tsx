import React from 'react';
import { StyleSheet, ImageBackground, View, Dimensions } from 'react-native';

type Props = {
  source: any;
  color?: string;
  style?: Record<string, unknown>;
};

const { width, height } = Dimensions.get('screen');

const Background: React.FC<Props> = ({ source, color, style}: Props) => {
  return (
    <ImageBackground
      source={source}
      style={[styles.backgroundImage, { width, height }, style]}
      resizeMode="cover"
    >
      {color && <View style={[styles.colorOverlay, { width, height, backgroundColor: color }]} />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  colorOverlay: {
    position: 'absolute',
    opacity: 0.8,
  },
});

export default Background;
