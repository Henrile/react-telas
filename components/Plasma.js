import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dados} >Preço:1350 R$, Tamanho:40, SO: Free</Text>
      

      <Text style={styles.text}> Uma tela de plasma (português brasileiro) ou ecrã plasma, plasma (português europeu) é um dispositivo baseado na tecnologia de painéis de plasma (PDP, Plasma Display Panel), que foi aprimorada na última década para o mercado da televisão de alta definição (HDTV). O funcionamento baseia-se na ionização de gases nobres (plasma) contidos em minúsculas células revestidas por fósforo.</Text>
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