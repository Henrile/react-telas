import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dados} >Preço:1200 R$, Tamanho:42, SO: Android</Text>
      

      <Text style={styles.text}> Um display de cristal líquido, acrônimo de LCD (em inglês liquid crystal display), é um painel fino usado para exibir informações por via eletrônica, 
        como texto, imagens e vídeos. </Text>
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