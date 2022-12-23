
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Button from './components/Button';
import ArgentinaList from './components/ArgentinaList';
import FranciaList from './components/FranciaList';
import CroaciaList from './components/CroaciaList';


export default function App() {
  const [showArgentinaOptions, setShowArgentinaOptions] = useState(false);
  const [showFranciaOptions, setShowFranciaOptions] = useState(false);
  const [showCroaciaOptions, setShowCroaciaOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onReset = () => {
    setShowFranciaOptions(false);
  };

  return (
    
     <View style={styles.container}>
      <Button theme="primary" label="Argentina" onPress={() => setShowArgentinaOptions(true)}/>
      {showArgentinaOptions ? (
        <ArgentinaList/>)
      : (
      <View style={styles.footerContainer}>
      </View>
      )}
      
      <Button theme="primary" label="Francia" onPress={() => setShowFranciaOptions(true)}/>
      {showFranciaOptions ? (
        <FranciaList/>)
      : (
        <View style={styles.footerContainer}>
      </View>
      )}
      
      <Button theme="primary" label="Croacia" onPress={() => setShowCroaciaOptions(true)}/>
      {showCroaciaOptions ? (
        <CroaciaList/>)
      : (
      <View style={styles.footerContainer}>
      </View>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});