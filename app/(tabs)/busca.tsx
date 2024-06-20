import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


type CEP = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<CEP>();
  const [text, onChangeText] = useState('');
  const navigation = useNavigation();

  const navigateToDetails = () => {
      navigation.navigate('Details', data); // Pass data as props
  };

  const buscaCep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${text}/json/`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscaCep();
  }, [text]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
      />

      <Button title="Busca Cep" onPress={navigateToDetails}/>
    </View>
  );
};

export default App;