/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type CostTimeDetailsProps = {
  finalCost: number;
  timeDuration: string;
};

const CostTimeDetails = (props: CostTimeDetailsProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={styles.heading}>Final cost</Text>
        <Text style={styles.value}>CAD ${props.finalCost}</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}>
        <Text style={styles.heading}>Duration</Text>
        <Text style={styles.value}>{props.timeDuration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    color: 'grey',
  },
  value: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 4,
  },
});

export default CostTimeDetails;
