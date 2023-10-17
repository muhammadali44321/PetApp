import React, {useState} from 'react';
import {View, TextInput, Button, Modal} from 'react-native';

const MyModal = ({visible, onClose, onSubmit}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    onSubmit(name, phoneNumber);
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

export default MyModal;
