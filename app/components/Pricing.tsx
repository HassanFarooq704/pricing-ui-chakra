import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Text
} from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Pricing() {
    return (
        <Box maxW={{lg:'750px',base:'450px'}} bg='white' mx={{lg:'auto',md:'auto',base:'25px'}} mt='-180px' borderRadius='16px' overflow='hidden' shadow={{ lg: '2xl', base: 'dark-lg' }} pb={{ lg: '0', base: '20px' }} justifyContent={{lg:'',md:'center'}}>
            <Flex direction={{ lg: 'row', base: 'column' }}>
                <Box bg=' #b8cffb ' p='40px' textAlign='center' >
                    <Text fontWeight='bold' fontSize='30px'>premium Pro</Text>
                    <Heading fontSize='50px'>$329</Heading>
                    <Text pb='12px'>billed just once</Text>
                    <Button w='250px' bg='#6B46C1' color='white'>Get Started</Button>
                </Box>
                <Box pt='40px' pl='30px'>
                    <Text>Acess these feature when you get this pricing for your business</Text>
                    <HStack pt='15px'>
                        <CheckCircleIcon color='#6B46C1' /> <Text>International calling and messeging</Text>
                    </HStack>
                    <HStack mt='13px'>
                        <CheckCircleIcon color='#6B46C1' /> <Text>Additional Phone Numbers</Text>
                    </HStack>
                    <HStack mt='13px'>
                        <CheckCircleIcon color='#6B46C1' /> <Text>Automated Messages via Zapier</Text>
                    </HStack>
                    <HStack mt='13px'>
                        <CheckCircleIcon color='#6B46C1' /> <Text>24/7 support and consulting</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}
