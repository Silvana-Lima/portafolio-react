import { HStack, VStack, Text, Button  } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import fotoperfil from '../assets/fotoperfil.jpg'

export const Hello = ()=>{
    return (
      <HStack bg="blackAlpha.900" h="100vh" justifyContent={"center"} gap={5}>
        <Image
          borderRadius="full"
          boxSize="250px"
          src={fotoperfil}
          alt="My Profile picture"
        />
        <VStack>
          <Text fontSize="30px" color="white">
            ¡Hola! Soy <br />
            Silvana Lima <br />
            Desarrolladora Web Frontend
          </Text>
          <Button colorScheme="pink" variant="outline">
            Lo que hago
          </Button>
        </VStack>
      </HStack>
    );
}