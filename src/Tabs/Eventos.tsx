import { VStack, Button, Box, ScrollView, Text, Divider } from "native-base";
import { CardConsulta } from '../componentes/CardConsulta'
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { calendario } from "../utils/mock";


export default function Eventos(){

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" px={5} >
        <Titulo color="blue.500" mt={5}>Calendário</Titulo>

        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md" >
          <EntradaTexto
            placeholder="Escolha a data"
          />
         
          <Button  my={3} >Consultar</Button>
        </Box>

        {/* <Titulo color="blue.800" alignSelf="center">Calendário</Titulo> */}
        
        
        <VStack space={3} divider={<Divider />} w="100%" py={5}>
        <CardConsulta 
        nome='Bloco de Texto'
        especialidade='Informação'
        foto='https://yt3.googleusercontent.com/WG2f-kYCfYfz1dgeOK9PPDLjsZL3wOcy_qgAVLJhej-BWjTSkCHsJraSFoG592TLSxk8_CVEsW4=s176-c-k-c0x00ffffff-no-rj'
        data='20/04/2023'
        foiAgendado
        />
         
         
          {
            calendario.map(evento => (
              <Box key={evento.id} w="100%" borderRadius="lg" p={3}>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2" mb="5">{evento.titulo}</Text>
                <Text color="gray.300" fontSize="md" textAlign="justify">
                  {evento.text}
                </Text>
              </Box>
            ))
          }
        </VStack>
      </VStack>
    </ScrollView>
  );
}