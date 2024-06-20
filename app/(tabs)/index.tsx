import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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

      <Button title="Busca Cep" onPress={buscaCep} />

      {isLoading ? (
        <ActivityIndicator /> 
      ) : (
        data ? (
          <Text>
            CEP: {data.cep}
            {'\n'} Logradouro: {data.logradouro}
            {'\n'} Complemento: {data.complemento}
            {'\n'} Bairro: {data.bairro}
            {'\n'} Localidade: {data.localidade}
            {'\n'} UF: {data.uf}
            {'\n'} IBGE: {data.ibge}
            {'\n'} GIA: {data.gia}
            {'\n'} DDD: {data.ddd}
            {'\n'} SIAFI: {data.siafi}
          </Text>
        ) : (
          <Text>Nenhum dado encontrado</Text> 
        )
      )}
    </View>
  );
};

export default App;