
import { NavigationContainer, Scre } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from './screens/StackHome';
import About from './screens/About';
import { MaterialIcons, Foundation, AntDesign } from '@expo/vector-icons';
import { FavoriteProvider } from './contexts/FavoriteContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from './screens/Favorites';
import Recently from './screens/Recently';

const Tab = createBottomTabNavigator();
export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FavoriteProvider>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={StackHome} options={{
            tabBarIcon: () => (
              <Foundation name="home" size={24} color="black" />
            )
          }} />

          <Tab.Screen name="About" component={About} options={{
            tabBarIcon: () => (
              <AntDesign name="infocirlce" size={24} color="black" />
            )
          }} />
          <Tab.Screen name="Favoritos" component={Favorites} options={{
            tabBarIcon: () => (
              <MaterialIcons name="favorite" size={24} color="black" />
            )
          }} />

          <Tab.Screen name="Recentlys" component={Recently} options={{
            tabBarIcon: () => (
              <MaterialIcons name="view-array" size={24} color="black" />
            )
          }} />
        </Tab.Navigator>
      </FavoriteProvider>
    </NavigationContainer>
  )
}




