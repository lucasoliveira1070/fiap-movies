import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Home'
import Details from './Details'
import Favorites from './Favorites'
import Recently from './Recently'

import { FavoriteProvider } from '../contexts/FavoriteContext';

export default function StackHome(){
  return (
      <FavoriteProvider>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Recently" component={Recently} />
        </Stack.Navigator>
      </FavoriteProvider>
  )
}