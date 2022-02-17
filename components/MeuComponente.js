import React from 'react';
import{View,Text,StyleSheet} from 'react-native';

export default function MeuComponente(){
    return (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Selecione Uma Categoria Abaixo       </Text>
          <Text style={styles.cardSubtitle2}>Categorias ↓      </Text>
        </View>
        
    )

}

const styles = StyleSheet.create({

    card: {
      backgroundColor:'#FFF',
      padding: 12,
      borderRadius: 3,
      marginVertical: 7
    
      
    },
    cardTitle:{
      fontSize: 18,
      fontWeight: 'bold'
    },
    cardSubtitle:{
      color:'#999',
      fontSize:14,
      borderRadius: 3,
      
    },
    cardSubtitle2:{
      justifyContent: 'center',
      fontSize:14,
      borderRadius: 3

      
    }
  });