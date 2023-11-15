import { VStack, Button, Modal, Box, ScrollView, Checkbox } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { useState } from "react";


export default function Principal(){

  const [showModal, setShowModal] = useState(false);
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" px={5} >
        <Titulo color="blue.500" mt={5}>Bem-vindo</Titulo>
        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md"  >
        <Button onPress={() => setShowModal(true)}>Cartilha Comportamental</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Cartilha</Modal.Header>
          <Modal.Body>
          Esta cartilha tem por objetivo criar mecanismos de
          prevenção e enfrentamento do assédio moral.
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Checkbox  value="test" accessibilityLabel="This is a dummy checkbox"  onChange={() => {
              setShowModal(false);
            }}>
                Li e concordo
              </Checkbox>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Box>

        </VStack>
    </ScrollView>
  );
}