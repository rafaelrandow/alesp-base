import { NativeBaseProvider, StatusBar, HStack, Image, Text } from 'native-base';
import { Titulo } from "./src/componentes/Titulo";
import { TEMAS } from './src/estilos/temas';
import Logo from './src/assets/alesp.png';
import Rotas from './src/Rotas';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <HStack bg={TEMAS.colors.blue[800]} w="100%" px={1} justifyContent="center" alignItems={"center"}>  
      <Image source={Logo} alt="Logo" style={{ width: 66, height: 66, resizeMode: 'contain' }} />
      <Titulo color="white" pr={5} justifyContent="center"  w="66%">Alesp Mobile</Titulo>
      <Ionicons name="person-circle-outline" color={TEMAS.colors.white} size={32}/> 
      {/* <Ionicons name="log-out-outline" color={TEMAS.colors.white} size={32}/>  */}
      </HStack>
      <Rotas />
    </NativeBaseProvider>
  );
}
