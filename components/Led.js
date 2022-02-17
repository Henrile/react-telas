import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dados} >Preço:1350 R$, Tamanho:40, SO: Free</Text>
      

      <Text style={styles.text}> A LED TV é um televisor que usa vários diodos emissores de luz (LEDs) por trás de um painel LCD. Proporciona melhor contraste de imagem que a LCD com iluminação traseira do por Eletroluminescência (comuns).. </Text>
        <Text style={styles.font}>Fonte:Wikipedia</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:10
  },
  dados:{
    textAlign: 'center',
    fontSize: 16,
    marginTop: 200,
    width: 600
  },
  text:{
    textAlign: 'justified',
    fontSize: 16,
    marginTop: 200,
    width: 600
  },
  font:{
    fontSize: 12,
    marginTop: 0,
  }
  
  
});