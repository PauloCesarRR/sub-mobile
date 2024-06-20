import { createStackNavigator } from '@react-navigation/stack';
import TabTwoScreen from './explore';
import App from './busca';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={App}
        options={{ title: 'Busca CEP' }}
      />
      <Stack.Screen
        name="Details"
        component={TabTwoScreen}
        options={{ title: 'Detalhes do CEP' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;