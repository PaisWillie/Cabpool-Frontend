/* eslint-disable react-native/no-inline-styles */
import {Input} from '@rneui/base';
import React, {useState} from 'react';
import {View} from 'react-native';

type FieldsProps = {
  setEditMade: (editMade: boolean) => void;
};

const Fields = (props: FieldsProps) => {
  const [name, setName] = useState('Daniel Akselrod');
  const [email, setEmail] = useState('akselrod@mcmaster.ca');

  return (
    <View
      style={{
        width: '100%',
        marginTop: 48,
      }}>
      <Input
        placeholder="Name"
        leftIcon={{name: 'pencil', type: 'evilicon'}}
        label="Name"
        labelStyle={{color: 'dodgerblue'}}
        value={name}
        onChangeText={(text: string) => {
          setName(text);
          props.setEditMade(true);
        }}
      />
      <Input
        placeholder="Email"
        leftIcon={{
          name: 'envelope',
          type: 'evilicon',
        }}
        labelStyle={{color: 'dodgerblue'}}
        label="Email"
        value={email}
        onChangeText={(text: string) => {
          setEmail(text);
          props.setEditMade(true);
        }}
      />
    </View>
  );
};

export default Fields;
