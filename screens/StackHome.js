import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Stack } from '../App';

import Home from './Home'
import Details from './Details'

import { FavoriteProvider } from '../contexts/FavoriteContext';

export default function StackHome() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}