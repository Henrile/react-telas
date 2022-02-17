import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,ScrollView, TextInput} from 'react-native';
import MeuComponente from './components/MeuComponente';
import Button from './components/Button'
import MOCK_DATA from './MOCK_DATA.json'



export default function App() {
  const[searchWord, setSearchWord] = useState('')
  const signIn = () => {
    alert('Leva para página LCD');
  }
  const singout = ()=>{
    alert('Leva para página LED');
  }
  const singoff = ()=>{
    alert('Leva para página PLASMA');
  }
 
  
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Catálogo de Televisores </Text>
     
      <ScrollView>
        
        <MeuComponente/>
        <Button labelButton="LCD" onpress={signIn} />
        <Button labelButton="LED" onpress={singout} />
        <Button labelButton="PLASMA" onpress={singoff} />
        <TextInput style={styles.marca} placeholder='Pesquisar por marcas' onChangeText={setSearchWord}/>
        {MOCK_DATA.filter((val) =>{
          if(setSearchWord === ""){
            return val
          }else if(val.first_name.toLowerCase().includes(searchWord)){
            return val
          }
          
        }).map((item, index) => (
          <Text style={styles.marca} key={index}>{item.first_name}  </Text>
        ))}

      </ScrollView>
    </View> 
    
  ); 
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#2A2A2A',
      justifyContent: 'center',
      alignItems:'center',
      paddingTop:50,
      
      

    },
    
    title: {
      color:'#FFFFFF',
      fontSize: 24,
      marginBottom: 40


      },
      marca:{
        color:'#FFFFFF',
        fontSize: 15,
        margintop: 40


      }
      
   
  

});
