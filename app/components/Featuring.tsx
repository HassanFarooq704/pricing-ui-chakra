import {
    Box,
    Flex,
    HStack,
    Text
} from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import icon1 from '../icons/icon1'
import icon2 from '../icons/icon2'
import icon3 from '../icons/icon3'


export default function Featuring() {
    return (
        <Box maxW={'650px'} m='auto' pt={{ lg: '50px', base: '30px' }} gap='20px' pb={{ lg: '0', base: '20px' }} px='40px' alignItems={{lg:'',md:'center'}} >
            <Flex direction={{ base: 'column', lg: 'row' }}>
                <Box >
                    <HStack mb='15px'>
                        <Icon as={icon1} /> <Text>30 days money back Guarantee</Text>
                    </HStack>
                </Box>
                <Box>
                    <HStack mb='15px'>
                        <Icon as={icon2} /> <Text>No setup fees 100% hassle-free</Text>
                    </HStack>
                </Box>
                <Box>
                    <HStack mb='15px'>
                        <Icon as={icon3} /> <Text>No monthly subscription Pay once and for all</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}
