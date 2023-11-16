import { NativeBaseProvider, StatusBar, HStack, Image } from 'native-base';
import { Titulo } from "./src/componentes/Titulo";
import { TEMAS } from './src/estilos/temas';
import Logo from './src/assets/alesp.png';
import Rotas from './src/Rotas';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarStyle: {
    height:70,
    backgroundColor: '#0B3B60',
  },
  tabBarActiveTintColor: "transparent",  
  tabBarInActiveTintColor: "transparent",
}

let numNotifica = 3;

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <HStack bg={TEMAS.colors.blue[800]} w="100%" px={5} alignItems={"center"}>  
      <NavigationContainer >
      <Image source={Logo} alt="Logo" style={{ width: 70, height: 70, resizeMode: 'contain' }} />
      <Titulo color="white" pr={10} w="280">Alesp Mobile</Titulo>      
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name='notification' 
          component={Titulo}
          options={{
            tabBarBadge: numNotifica,
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
