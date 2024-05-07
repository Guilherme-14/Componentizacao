import { View, Text, Image } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);
  }
  return (
    
    <View style={styles.container}>
      <Image 
      style={{width:'80%', height:80, marginBottom:30}}
      resizeMode="contain"
      source={require('../../assets/facebook.png')}
     />
      <InputTexto dica="Número de celular ou email"/>
      <InputTexto dica="Senha"/>

      <Botao btn="Entrar" cor='#1877F2' src='home' cortexto='#fff' tm='35%' />
      <View style={styles.cont}>
        <View style={styles.line}/>
        <Text style={styles.text}>ou</Text>
        <View style={styles.line}/>
      </View>
      <Botao btn="Criar nova conta" cor='' src='Excluído' cortexto='#000' tm='10%' />
    </View>
  );
}

