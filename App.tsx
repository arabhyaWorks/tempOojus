import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button, Overlay } from '@rneui/themed';

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </SafeAreaView>
  );
};

export default App;