
import { NavigationContainer, Scre } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './screens/Favorites';
import Recently from './screens/Recently';
import StackHome from './screens/StackHome';
import About from './screens/About';
import { MaterialIcons, Foundation, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
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

        <Tab.Screen name="Favorites" component={Favorites} options={{
          tabBarIcon: () => (
            <MaterialIcons name="favorite" size={24} color="black" />
          )
        }} />

        <Tab.Screen name="Recently" component={Recently} options={{
          tabBarIcon: () => (
            <MaterialIcons name="view-array" size={24} color="black" />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}




