import { NativeBaseProvider, StatusBar, HStack, Image } from 'native-base';
import { Titulo } from "./src/componentes/Titulo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TEMAS } from './src/estilos/temas';
import Logo from './src/assets/alesp.png';
import Rotas from './src/Rotas';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarStyle: {
    height:66,
    backgroundColor: '#0B3B60',
  },
  tabBarActiveTintColor: "transparent",
}


export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <HStack bg={TEMAS.colors.blue[800]} w="100%" px={5} alignItems={"center"}>  
      <Image source={Logo} alt="Logo" style={{ width: 66, height: 66, resizeMode: 'contain' }} />
      <Titulo color="white" pr={1} w="66%">Alesp Mobile</Titulo>      
      <NavigationContainer >
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name='notification' 
          component={Titulo}
          options={{
            tabBarBadge: 3,
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: () => (
              <Ionicons name="calendar" color={TEMAS.colors.white} size={24}/> 
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Ionicons name="log-out-outline" color={TEMAS.colors.white} size={32}/>  */}
      </NavigationContainer>
      </HStack>
      <Rotas />
    </NativeBaseProvider>
  );
}
