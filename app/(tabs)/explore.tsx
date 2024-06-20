import React from 'react';
import { Text, View } from 'react-native';

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


  const TabTwoScreen = (cepData) => {

    const data = cepData.route.params
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {data ? (
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
        )}
    </View>
  );
};

export default TabTwoScreen;